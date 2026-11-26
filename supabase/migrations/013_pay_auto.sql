-- ReUse · migrasi 013 · konfirmasi pembayaran otomatis (tanpa verifikasi admin)
-- Saat 'pay_auto' = true, penjual cukup menekan "Saya sudah bayar": pembayaran langsung disetujui,
-- tanpa bukti. Admin bisa mematikannya di Panel admin → Bayar untuk kembali ke verifikasi manual.

insert into public.settings (key, value) values ('pay_auto', 'true'::jsonb) on conflict (key) do nothing;

create or replace function public.pay_auto() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select value = 'true'::jsonb from public.settings where key = 'pay_auto'), false)
$$;
revoke execute on function public.pay_auto() from public, anon;
grant execute on function public.pay_auto() to authenticated;

-- Bukti bayar tidak wajib dalam mode otomatis
alter table public.payments alter column proof_path drop not null;

drop policy if exists "payments: pemilik kirim bukti" on public.payments;
create policy "payments: pemilik kirim bukti" on public.payments
  for insert to authenticated with check (
    owner = auth.uid()
    and status = case when public.pay_auto() then 'approved' else 'pending' end
    and ((proof_path is null and public.pay_auto()) or storage_path_owner(proof_path) = auth.uid()::text)
    and exists (select 1 from public.items i
                where i.id = payments.item_id and i.owner = auth.uid()
                  and ((payments.kind = 'post' and i.pay_status <> 'approved')
                    or (payments.kind = 'sundul' and i.pay_status = 'approved' and i.status = 'available'
                        and (i.bumped_until is null or i.bumped_until < now()))))
    and not exists (select 1 from public.payments p
                    where p.item_id = payments.item_id and p.kind = payments.kind and p.status = 'pending'));

-- Status saat dibuat selalu ditentukan server (otomatis disetujui atau menunggu admin)
create or replace function public.payments_before() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if tg_op = 'INSERT' then
    new.amount := case when new.kind = 'sundul' then public.sundul_fee() else public.post_fee() end;
    new.decided_by := null;
    if public.pay_auto() then
      new.status := 'approved'; new.decided_at := now(); new.note := 'Otomatis';
    else
      new.status := 'pending'; new.decided_at := null; new.note := null;
    end if;
  else
    if old.status <> 'pending' then raise exception 'Pembayaran ini sudah diputuskan'; end if;
    if new.item_id <> old.item_id or new.owner <> old.owner or new.proof_path is distinct from old.proof_path
       or new.amount <> old.amount or new.kind <> old.kind then
      raise exception 'Hanya status dan catatan yang boleh diubah';
    end if;
    if new.status <> 'pending' then new.decided_at := now(); new.decided_by := auth.uid(); end if;
  end if;
  return new;
end $$;
