[![AlpineCSS](https://alpinecss.netlify.app/alpinecss.png)](https://alpinecss.netlify.app)

# 🏔️ AlpineCSS

**AlpineCSS** is a tiny, classless-adjacent extended version of [PicoCSS Color Slate](https://picocss.com). It adds essential UI components—like a fully animated hamburger menu and nested accordion dropdowns—without requiring heavy JavaScript frameworks or complex class names.

Built specifically to work seamlessly with [Alpine.js](https://alpinejs.dev) and the [Alpine-Turnout](https://alpine-turnout.netlify.app) Plugin.

---

## ✨ Features

* **Zero-JS Hamburger:** A functional, animated mobile menu using the "Checkbox Trick."
* **Nested Dropdowns:** Stabilized `<details>`-based dropdowns that work on desktop (hover-ready) and mobile (accordion style).
* **Pico-Native:** Inherit your Pico CSS variables (`--pico-color`, `--pico-background-color`, etc.).
* **Ultra-Lightweight:** Adds less than 2KB minified to the PicoCSS classless lib.

---

## 🚀 Quick Start

### AlpineCSS Example 1
[![AlpineCSS Example 1](https://alpinecss.netlify.app/playground-1.png)](https://turnout-playground.netlify.app/?code=PCFET0NUWVBFIGh0bWw-CjxodG1sIGxhbmc9ImVuIj4KPGhlYWQ-CiAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI-CiAgICA8bGluayByZWw9InNob3J0Y3V0IGljb24iIGhyZWY9Ii9mYXZpY29uLmljbyI-CiAgICA8dGl0bGU-QWxwaW5lQ1NTPC90aXRsZT4KICAgIDxzY3JpcHQgc3JjPSIvL3VucGtnLmNvbS9hbHBpbmUtdHVybm91dCIgZGVmZXI-PC9zY3JpcHQ-CiAgICA8c2NyaXB0IHNyYz0iLy91bnBrZy5jb20vYWxwaW5lanMiIGRlZmVyPjwvc2NyaXB0PgogICAgPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSIvL3VucGtnLmNvbS9jc3NhbHBpbmUiPgo8L2hlYWQ-Cjxib2R5IHgtZGF0YT4KCiAgICA8aGVhZGVyPgogICAgICAgIDxuYXY-CiAgICAgICAgICA8dWw-CiAgICAgICAgICAgIDxsaT48c3Ryb25nIHgtdGV4dD0iJHN0b3JlLnR1cm5vdXQudGl0bGUiPjwvc3Ryb25nPjwvbGk-CiAgICAgICAgICA8L3VsPgogICAgICAgICAgCiAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJtZW51LXRvZ2dsZSIgYXJpYS1sYWJlbD0iVG9nZ2xlIG1lbnUiPgogICAgICAgICAgPGxhYmVsIGZvcj0ibWVudS10b2dnbGUiIGNsYXNzPSJoYW1idXJnZXItbWVudSI-PC9sYWJlbD4KCiAgICAgICAgICA8dWwgY2xhc3M9Im5hdi1saW5rcyI-CiAgICAgICAgICAgIDxsaT48YSBocmVmPSIvIj5Ib21lPC9hPjwvbGk-CiAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgPGxpPgogICAgICAgICAgICAgICAgPGRldGFpbHMgY2xhc3M9ImRyb3Bkb3duIj4KICAgICAgICAgICAgICAgICAgPHN1bW1hcnk-UHJvZmlsZXM8L3N1bW1hcnk-CiAgICAgICAgICAgICAgICAgIDx1bD4KICAgICAgICAgICAgICAgICAgICA8bGk-PGEgaHJlZj0iL3VzZXIvam9obiI-Sm9objwvYT48L2xpPgogICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPSIvdXNlci9qYW5lIj5KYW5lPC9hPjwvbGk-CiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9Ii91c2VyL3JvZCI-Um9kPC9hPjwvbGk-CiAgICAgICAgICAgICAgICAgIDwvdWw-CiAgICAgICAgICAgICAgICA8L2RldGFpbHM-CiAgICAgICAgICAgICAgPC9saT4KICAgICAgICAgICAgICAKICAgICAgICAgICAgICA8bGk-PGEgaHJlZj0iL3NlYXJjaCIgcm9sZT0iYnV0dG9uIj5TZWFyY2g8L2E-PC9saT4KICAgICAgICAgIDwvdWw-CiAgICAgICAgPC9uYXY-CiAgICA8L2hlYWRlcj4KICAgIDxtYWluPgogICAgICAgIDxhcnRpY2xlIHgtcm91dGU9Ii8iIHgtdGl0bGU9IldlbGNvbWUgSG9tZSIgeC10cmFuc2l0aW9uPgogICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBob21lcGFnZS48L3A-CiAgICAgICAgPC9hcnRpY2xlPgoKICAgICAgICA8YXJ0aWNsZSB4LXJvdXRlPSIvdXNlci86bmFtZSIgeC10aXRsZT0iVXNlciBQcm9maWxlIiB4LXRyYW5zaXRpb24-CiAgICAgICAgICAgIDxwPkhlbGxvLCA8c3Ryb25nIHgtdGV4dD0ibmFtZSI-PC9zdHJvbmc-ITwvcD4KICAgICAgICA8L2FydGljbGU-CgogICAgICAgIDxhcnRpY2xlIHgtcm91dGU9Ii9zZWFyY2giIHgtdGl0bGU9IlNlYXJjaCIgeC10cmFuc2l0aW9uPgogICAgICAgICAgICA8ZGl2IHgtZGF0YT0ieyBxdWVyeTogJycgfSI-CiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0idGV4dCIgeC1tb2RlbD0icXVlcnkiIHBsYWNlaG9sZGVyPSJUeXBlIGhlcmUuLi4iPgogICAgICAgICAgICAgICAgPHA-WW91ciBpbnB1dCBpcyBwcmVzZXJ2ZWQgZXZlbiBpZiB5b3Ugc3dpdGNoIHRhYnMhPC9wPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2FydGljbGU-CiAgICA8L21haW4-Cgo8L2JvZHk-CjwvaHRtbD4)

### 1. Installation

You can link directly via CDN:

```html

<link rel="stylesheet" href="https://unpkg.com/cssalpine">

```

Or install via NPM:

```bash
npm install cssalpine

```

### 2. Basic HTML Structure

AlpineCSS uses standard HTML5 tags. No complex classes needed.

```html
<header>
  <nav>
    <ul>
      <li><strong>My Brand</strong></li>
    </ul>

    <input type="checkbox" id="menu-toggle" aria-label="Toggle menu">
    <label for="menu-toggle" class="hamburger-menu"></label>

    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      
      <li>
        <details class="dropdown">
          <summary>Products</summary>
          <ul>
            <li><a href="/web">Web Apps</a></li>
            <li><a href="/mobile">Mobile Apps</a></li>
          </ul>
        </details>
      </li>
      
      <li><a href="/contact" role="button">Contact</a></li>
    </ul>
  </nav>
</header>

```

----------

## 🛠️ Configuration (Vite)

If you are contributing or building your own minified version:

1.  **Install dependencies:** `npm install`
    
2.  **Build:** `npm run build`
    

The build process uses Vite to minify `alpine.css` into `dist/alpine.min.css`, ensuring all Pico variable references remain intact.

----------

## 🧩 Integration with Alpine.js

While the CSS handles the layout and the "Checkbox Trick" handles the mobile toggle, you can use **Alpine.js** to add enhanced behavior (like closing the menu on navigation):

```html
<nav x-data="{ open: false }">
  <input type="checkbox" id="menu-toggle" :checked="open" @change="open = $event.target.checked">
  </nav>

```

----------

## 🎨 Customization

AlpineCSS uses the same CSS variables as Pico. You can override them in your root:

```css
:root {
  --pico-nav-element-height: 3rem; /* Adjusts the header height & menu alignment */
  --pico-color: #ff3e00;           /* Changes the hamburger and link colors */
}

```

----------

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

----------

## 👤 Author

**rodezee** GitHub: [@rodezee](https://www.google.com/search?q=https://github.com/rodezee)

