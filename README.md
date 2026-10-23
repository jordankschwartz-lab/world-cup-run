# World Cup Run

A 3D football game set at the 2026 World Cup. Pick a nation and one player, play every match yourself, and live the tournament off the pitch: the tunnel, the team hotel, the drive home.

The whole game is one file, `index.html`. It loads Three.js and supabase-js from public CDNs.

## Saving

- Anyone can play as a guest, but saving requires signing in with Google.
- Each Google account gets 3 save slots. The game saves automatically after every match and activity.
- Saves live in the shared Supabase project in the `wcr_saves` table. Every name for this game starts with `wcr_`, so nothing collides with the other games' tables.
- Row level security lets each player read and change only their own saves. The key in `index.html` is the public anon key, which is safe to ship.
- If a guest signs in partway through a run, that run is kept and saved to their first free slot.

## One-time Supabase setup

1. **Create the table.** Open the Supabase dashboard, go to SQL Editor, start a new query, paste in `supabase_setup.sql` and run it. It's safe to run again later.
2. **Allow the game's address.** Go to Authentication, then URL Configuration, and add these to **Redirect URLs**:
   - `https://worldcup.schwartzapps.com` (or whatever address the game ends up on)
   - `http://localhost:8765` (for testing on your own computer)
3. **Check Google sign-in.** Under Authentication, then Providers, Google should already be enabled, since Card Critters uses it. Nothing to change there.

## Hosting

The game is hosted like the other games: a GitHub repo connected to the host, with its own schwartzapps.com subdomain. `_headers` sets the security headers, including which outside sites the page may talk to (the CDNs, Google Fonts and the Supabase project).

## Running locally

```
python -m http.server 8765
```

Then open http://localhost:8765. Sign-in only works once `http://localhost:8765` is in the Supabase redirect URLs. Opening `index.html` straight from disk works for playing, but saving is turned off there.
