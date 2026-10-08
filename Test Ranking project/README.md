# claude-practice

This is my Claude Code practice repo.

## Tier-list App

An interactive drag-and-drop tier ranker. Choose a category and rank a random 10 items from it.

### Running locally

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Features

- **Category picker**: Choose between System Design, Watches, Cars, or Films.
- **Random 10**: Each category selects a random 10 items from its pool.
- **Shuffle**: Get a new random 10 from the current category with the Shuffle button.
- **Drag and drop**: Move items between tiers (S, A, B, C) and back to unranked.
- **Tap to learn**: Click any item to see its description in a modal.
- **Persistent**: Your rankings are saved in browser localStorage.
- **Download**: Export your tier list as a PNG image with the category title.
- **Responsive**: Works on desktop and mobile.
