# AI Spring Amsterdam 🌸

Weekly AI reading group — foundations, state of the art, safety. Built with [Astro](https://astro.build), deployed to GitHub Pages.

## Quick start

```bash
npm install
npm run dev       # localhost:4321
npm run build     # static output in ./dist
```

## Project structure

```
src/
├── content/sessions/   # One .md per week (content collection)
├── data/participants.json  # All members (single source of truth)
├── components/         # SessionCard, ParticipantCard, ParticipantChip, etc.
├── layouts/Layout.astro
├── pages/              # index, about, roadmap, past-sessions
└── styles/global.css
```

## Common tasks

### Add a new session

Create `src/content/sessions/week-09.md`:

```yaml
---
week: 9
cycle: 3
theme: "foundation"        # foundation | sota | safety | free
date: "2026-05-01"
paperTitle: "Paper Title"
paperUrl: "https://arxiv.org/abs/..."
paperAuthors: "Author et al."
paperYear: 2024
companionTitle: "Blog Post Title"
companionUrl: "https://..."
companionSource: "Source Name"
companionDescription: "One-line description."
---

Short description of the paper shown on cards.
```

### Add a participant

Edit `src/data/participants.json`:

```json
{
  "alice": {
    "name": "Alice",
    "surname": "De Vries",
    "link": "https://alice.dev",
    "affiliation": "VU Amsterdam",
    "role": "Student"
  }
}
```

The ID (`"alice"`) is used to reference this person in session frontmatter.

### Mark a session as completed

Add these fields to the session's frontmatter:

```yaml
completed: true
presenter: "michele"                    # participant ID
participants: ["michele", "alice"]      # participant IDs
youtubeId: "dQw4w9WgXcQ"               # optional recording
discussionNotes: "We debated whether..."  # optional
```

### Change the Google Calendar

In `src/pages/index.astro`, replace `YOUR_CALENDAR_ID` in the iframe `src` with your public Google Calendar embed URL.

## Deployment

Pushes to `main` auto-deploy via `.github/workflows/deploy.yml`.

**Setup (one-time):** repo Settings → Pages → Source → **GitHub Actions**.

Site URL: `https://<username>.github.io/ai-spring-amsterdam/`

To change the base URL, edit `site` and `base` in `astro.config.mjs`.
