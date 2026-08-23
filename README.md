# Your Portfolio

## Files
- `index.html` — page structure. You shouldn't need to touch this.
- `style.css` — all visual design (colors, fonts, spacing, the ECG line motif).
- `content.js` — **this is the only file you edit.** Every word on the site — your name, projects, skills, certifications, contact links — lives here as plain text.
- `app.js` — reads `content.js` and builds the page. No need to touch this either.

## How to edit
1. Open `content.js` in any text editor (Notepad, VS Code, even GitHub's web editor).
2. Change the text between the quotes `"like this"`.
3. To add a new project, certificate, or achievement: copy an existing `{ ... }` block in that section, paste it above the closing `]`, and edit the copy.
4. To remove one: delete its whole `{ ... }` block.
5. Save the file, refresh the page (or push to GitHub) — that's it. No build step, no npm install.

A few fields are optional and safe to leave as `""` (empty quotes):
- `photo` — add an image URL to replace your initials with a real photo.
- `resumeUrl` — add a link to your resume PDF to show a download button.
- `link` on any project — add a live demo or GitHub repo link.

## Deploying — GitHub Pages (recommended, free)
1. Create a new GitHub repository (e.g. `bhoomika-portfolio`).
2. Upload these four files (`index.html`, `style.css`, `content.js`, `app.js`) to the repo root.
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment," set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
5. Your site goes live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.
6. Any time you edit `content.js` on GitHub (or push a new version), the live site updates automatically.

## Deploying — Netlify (also free, drag-and-drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the whole `portfolio` folder onto the page.
3. Netlify gives you a live URL immediately. You can rename it or connect a custom domain in Site settings.
4. To make future edits live: either re-drag the folder after editing `content.js`, or connect the site to a GitHub repo (Site settings → Build & deploy → Link repository) so it redeploys automatically on every push — same workflow as GitHub Pages.

## Notes on the design
The whole site is themed around what you actually built: the flagship AyuSense project reads five kinds of medical signals, so an ECG waveform runs through the hero and as section dividers — teal for the clinical/data side, coral for the "pulse"/accent. Everything is real content from your resume; nothing is a placeholder except the two optional fields above.
