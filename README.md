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
[![AlpineCSS Example 1](https://alpinecss.netlify.app/playground-1.png)](https://turnout-playground.netlify.app/?code=PCFET0NUWVBFIGh0bWw-CjxodG1sIGxhbmc9ImVuIj4KPGhlYWQ-CiAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI-CiAgICA8bGluayByZWw9InNob3J0Y3V0IGljb24iIGhyZWY9Ii9mYXZpY29uLmljbyI-CiAgICA8dGl0bGU-QWxwaW5lQ1NTPC90aXRsZT4KICAgIDxzY3JpcHQgc3JjPSIvL3VucGtnLmNvbS9hbHBpbmUtdHVybm91dCIgZGVmZXI-PC9zY3JpcHQ-CiAgICA8c2NyaXB0IHNyYz0iLy91bnBrZy5jb20vYWxwaW5lanMiIGRlZmVyPjwvc2NyaXB0PgogICAgPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSIvL2VzbS5zaC9naC9yb2RlemVlL2FscGluZWNzcyI-CjwvaGVhZD4KPGJvZHkgeC1kYXRhPgoKICAgIDxoZWFkZXI-CiAgICAgICAgPG5hdj4KICAgICAgICAgIDx1bD4KICAgICAgICAgICAgPGxpPjxzdHJvbmcgeC10ZXh0PSIkc3RvcmUudHVybm91dC50aXRsZSI-PC9zdHJvbmc-PC9saT4KICAgICAgICAgIDwvdWw-CiAgICAgICAgICAKICAgICAgICAgIDxpbnB1dCB0eXBlPSJjaGVja2JveCIgaWQ9Im1lbnUtdG9nZ2xlIiBhcmlhLWxhYmVsPSJUb2dnbGUgbWVudSI-CiAgICAgICAgICA8bGFiZWwgZm9yPSJtZW51LXRvZ2dsZSIgY2xhc3M9ImhhbWJ1cmdlci1tZW51Ij48L2xhYmVsPgoKICAgICAgICAgIDx1bCBjbGFzcz0ibmF2LWxpbmtzIj4KICAgICAgICAgICAgPGxpPjxhIGhyZWY9Ii8iPkhvbWU8L2E-PC9saT4KICAgICAgICAgICAgICAKICAgICAgICAgICAgICA8bGk-CiAgICAgICAgICAgICAgICA8ZGV0YWlscyBjbGFzcz0iZHJvcGRvd24iPgogICAgICAgICAgICAgICAgICA8c3VtbWFyeT5Qcm9maWxlczwvc3VtbWFyeT4KICAgICAgICAgICAgICAgICAgPHVsPgogICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPSIvdXNlci9qb2huIj5Kb2huPC9hPjwvbGk-CiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9Ii91c2VyL2phbmUiPkphbmU8L2E-PC9saT4KICAgICAgICAgICAgICAgICAgICA8bGk-PGEgaHJlZj0iL3VzZXIvcm9kIj5Sb2Q8L2E-PC9saT4KICAgICAgICAgICAgICAgICAgPC91bD4KICAgICAgICAgICAgICAgIDwvZGV0YWlscz4KICAgICAgICAgICAgICA8L2xpPgogICAgICAgICAgICAgIAogICAgICAgICAgICAgIDxsaT48YSBocmVmPSIvc2VhcmNoIiByb2xlPSJidXR0b24iPlNlYXJjaDwvYT48L2xpPgogICAgICAgICAgPC91bD4KICAgICAgICA8L25hdj4KICAgIDwvaGVhZGVyPgogICAgPG1haW4-CiAgICAgICAgPGFydGljbGUgeC1yb3V0ZT0iLyIgeC10aXRsZT0iV2VsY29tZSBIb21lIiB4LXRyYW5zaXRpb24-CiAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGhvbWVwYWdlLjwvcD4KICAgICAgICA8L2FydGljbGU-CgogICAgICAgIDxhcnRpY2xlIHgtcm91dGU9Ii91c2VyLzpuYW1lIiB4LXRpdGxlPSJVc2VyIFByb2ZpbGUiIHgtdHJhbnNpdGlvbj4KICAgICAgICAgICAgPHA-SGVsbG8sIDxzdHJvbmcgeC10ZXh0PSJuYW1lIj48L3N0cm9uZz4hPC9wPgogICAgICAgIDwvYXJ0aWNsZT4KCiAgICAgICAgPGFydGljbGUgeC1yb3V0ZT0iL3NlYXJjaCIgeC10aXRsZT0iU2VhcmNoIiB4LXRyYW5zaXRpb24-CiAgICAgICAgICAgIDxkaXYgeC1kYXRhPSJ7IHF1ZXJ5OiAnJyB9Ij4KICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJ0ZXh0IiB4LW1vZGVsPSJxdWVyeSIgcGxhY2Vob2xkZXI9IlR5cGUgaGVyZS4uLiI-CiAgICAgICAgICAgICAgICA8cD5Zb3VyIGlucHV0IGlzIHByZXNlcnZlZCBldmVuIGlmIHlvdSBzd2l0Y2ggdGFicyE8L3A-CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvYXJ0aWNsZT4KICAgIDwvbWFpbj4KCjwvYm9keT4KPC9odG1sPg)

### 1. Installation

You can link directly via CDN:

```html

<link rel="stylesheet" href="https://unpkg.com/alpinecss">

```

Or install via NPM:

```bash
npm install alpinecss

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

