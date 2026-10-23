# World Cup Run

A 3D football game set at the 2026 World Cup. Pick a nation and one player, play every match yourself, and live the tournament off the pitch: the tunnel, the team hotel, the drive home.

- `index.html`: the page and its styles.
- `app.js`: all game code.
- Three.js and supabase-js load from public CDNs, pinned to exact versions with integrity hashes.

## Saving

- Anyone can play as a guest, but saving requires signing in with Google. The database enforces this, not just the game.
- Each Google account gets 3 save slots. The game saves automatically after every match and activity.
- Saves live in the shared Supabase project in the `wcr_saves` table. Every name for this game starts with `wcr_`, so nothing collides with the other games' tables.
- Row level security means each player reads and changes only their own saves. Signed-out visitors have no access at all.
- The key in `app.js` is the public anon key, which is safe to ship. Never put the service_role key in this repo.
- Saves loaded from the database are checked field by field before the game uses them. Anything malformed is rejected.
- If a guest signs in partway through a run, that run is kept and saved to their first free slot.

## Supabase setup

1. **Create or update the table.** Open the Supabase dashboard, go to SQL Editor, start a new query, paste in `supabase_setup.sql` and run it. It's safe to run again, so run it after any change to that file. It includes explicit Data API grants, which Supabase requires for tables created from 30 October 2026.
2. **Allow the game's address.** Go to Authentication, then URL Configuration, and add these to **Redirect URLs**:
   - `https://worldcup.schwartzapps.com`
   - `http://localhost:8765` (for testing on your own computer)
3. **Check Google sign-in.** Under Authentication, then Providers, Google should already be enabled, since Card Critters uses it.

## Hosting

The game is hosted on Netlify at https://worldcup.schwartzapps.com. `_headers` sets the security headers:

- The content security policy only allows this site's own scripts and the two pinned library files, and only lets the page talk to the Supabase project.
- Framing by other sites is blocked.

If you change the Three.js or supabase-js version, update the URL and integrity hash in `index.html` and the URL in `_headers`.

## Running locally

```
python serve.py
```

Then open http://localhost:8765. The local server sends the same security headers as Netlify, so problems show up before you deploy. Sign-in only works once `http://localhost:8765` is in the Supabase redirect URLs.
