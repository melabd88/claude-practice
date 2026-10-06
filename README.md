# claude-practice

This is my Claude Code practice repo.

## Tier-list App

An interactive drag-and-drop tier ranker for system design concepts.

### Running locally

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Features

- **Drag and drop**: Move concepts between tiers and back to unranked.
- **Tap to learn**: Click any concept to see its description.
- **Persistent**: Your rankings are saved in browser localStorage.
- **Download**: Export your tier list as a PNG image.
- **Responsive**: Works on desktop and mobile.
