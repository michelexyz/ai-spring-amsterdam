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
├── content/images/     # Session photos (referenced by filename in frontmatter)
├── components/         # SessionCard, SessionGallery, HereFab, ParticipantChip, etc.
├── layouts/Layout.astro
├── pages/              # index, about, roadmap, gallery
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
location: "VU Amsterdam"   # optional, shown after 📍
---

Short description of the paper shown on cards.
```

The session is treated as **upcoming** as long as `completed` is `false` (the default).
This drives two things automatically:

- **Homepage "Up Next" card** — picks the first session in week order with `completed: false`.
- **Roadmap "we are here" divider** — placed immediately *before* that same first non-completed session. Mark a week `completed: true` to push the divider forward to the next one. If every session is completed, the divider sits at the end of the roadmap.

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

Flipping `completed` to `true` removes this session from the "Up Next" slot on the homepage and moves the **we-are-here** divider on the Roadmap forward to the next non-completed week.

### Add photos to a session (Gallery page)

Drop image files into `src/content/images/`, then reference them by filename:

```yaml
images:
  - "AI_Spring_Chollet.jpg"
  - "discussion-2.jpg"
imagesCaptions:
  - "Group discussion."
  - "Whiteboard sketch of the ARC tasks."
```

Sessions with no `images` field don't appear on the Gallery page at all. Images are optimized automatically via Astro's `<Image>` component.

### Change the Google Calendar

In `src/pages/index.astro`, replace `YOUR_CALENDAR_ID` in the iframe `src` with your public Google Calendar embed URL.

## Deployment

Pushes to `main` auto-deploy via `.github/workflows/deploy.yml`.

**Setup (one-time):** repo Settings → Pages → Source → **GitHub Actions**.

Site URL: `https://<username>.github.io/ai-spring-amsterdam/`

To change the base URL, edit `site` and `base` in `astro.config.mjs`.
