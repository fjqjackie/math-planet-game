create table if not exists public.battle_rooms (
  code text primary key,
  mode text not null check (mode in ('room', 'random')),
  status text not null check (status in ('waiting', 'ready', 'active', 'finished')),
  host_id text not null,
  guest_id text,
  grade integer not null default 2,
  grade_a integer,
  grade_b integer,
  ops text[] not null default array['add', 'sub', 'mul', 'div', 'mixed'],
  ops_a text[],
  ops_b text[],
  difficulty integer not null default 32,
  difficulty_a integer,
  difficulty_b integer,
  turn text not null default 'A' check (turn in ('A', 'B')),
  hp_a integer not null default 100,
  hp_b integer not null default 100,
  pick_a text,
  pick_b text,
  question jsonb,
  question_side text check (question_side in ('A', 'B')),
  question_started_at timestamptz,
  winner text check (winner in ('A', 'B')),
  log text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table if exists public.battle_rooms
  add column if not exists grade_a integer,
  add column if not exists grade_b integer,
  add column if not exists ops_a text[],
  add column if not exists ops_b text[],
  add column if not exists difficulty_a integer,
  add column if not exists difficulty_b integer,
  add column if not exists question_side text;

alter table public.battle_rooms enable row level security;

drop policy if exists "public read battle rooms" on public.battle_rooms;
create policy "public read battle rooms"
on public.battle_rooms for select
using (true);

drop policy if exists "public create battle rooms" on public.battle_rooms;
create policy "public create battle rooms"
on public.battle_rooms for insert
with check (true);

drop policy if exists "public update battle rooms" on public.battle_rooms;
create policy "public update battle rooms"
on public.battle_rooms for update
using (true)
with check (true);

do $$
begin
  alter publication supabase_realtime add table public.battle_rooms;
exception
  when duplicate_object then null;
end $$;
