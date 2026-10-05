/* ===== Placeholder styles: swap colors/fonts here once your design is set ===== */
:root {
  --bg: #ffffff;
  --text: #222222;
  --muted: #666666;
  --line: #dddddd;
  --font: Georgia, "Times New Roman", serif;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
  line-height: 1.6;
}

header, main, footer {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
}

header { border-bottom: 1px solid var(--line); }
footer { border-top: 1px solid var(--line); color: var(--muted); font-size: 0.9rem; margin-top: 2rem; }

.site-name { font-size: 1.4rem; font-weight: bold; margin: 0 0 0.5rem; }

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
}

a { color: inherit; }
nav a[aria-current="page"] { font-weight: bold; text-decoration: none; }

img { max-width: 100%; height: auto; }

.about-photo {
  width: 100%;
  max-width: 320px;
  background: var(--line);
  aspect-ratio: 1 / 1;
  display: block;
}

:focus-visible { outline: 2px solid var(--text); outline-offset: 2px; }
