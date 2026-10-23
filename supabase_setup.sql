-- World Cup Run cloud saves
-- Run this once in your Supabase project's SQL Editor (Dashboard -> SQL Editor -> New query).
-- Everything is prefixed "wcr_" so it can't collide with tables from your other games.
-- Safe to run again: it only creates what's missing and recreates its own policies.

create table if not exists public.wcr_saves (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  slot        smallint not null check (slot between 1 and 3),
  team        text not null,              -- team code, e.g. 'ARG'
  player      text not null,              -- the player you control, e.g. 'Lionel Messi'
  stage       text not null,              -- shown on the save card, e.g. 'Round of 16'
  summary     text,                       -- shown on the save card, e.g. '4 played · 3-1-0'
  data        jsonb not null,             -- the whole tournament state
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  constraint wcr_saves_user_slot_key unique (user_id, slot),
  constraint wcr_saves_data_size check (pg_column_size(data) < 512000)
);

-- Keep updated_at current on every save.
create or replace function public.wcr_touch_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists wcr_saves_touch_updated_at on public.wcr_saves;
create trigger wcr_saves_touch_updated_at
  before update on public.wcr_saves
  for each row execute function public.wcr_touch_updated_at();

-- Row level security: a signed-in player can only see and change their own saves.
alter table public.wcr_saves enable row level security;

drop policy if exists "wcr_saves_select_own" on public.wcr_saves;
create policy "wcr_saves_select_own"
  on public.wcr_saves for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "wcr_saves_insert_own" on public.wcr_saves;
create policy "wcr_saves_insert_own"
  on public.wcr_saves for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "wcr_saves_update_own" on public.wcr_saves;
create policy "wcr_saves_update_own"
  on public.wcr_saves for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "wcr_saves_delete_own" on public.wcr_saves;
create policy "wcr_saves_delete_own"
  on public.wcr_saves for delete
  to authenticated
  using ((select auth.uid()) = user_id);
