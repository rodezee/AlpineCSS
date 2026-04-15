![AlpineCSS](https://alpinecss.netlify.app/alpinecss.png)

```
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

## Kickstart

### AlpineCSS Example 1
[![AlpineCSS Example 1](https://alpinecss.netlify.app/playground-1.png)](https://turnout-playground.netlify.app/?code=PCFET0NUWVBFIGh0bWw-CjxodG1sPgo8aGVhZD4KICA8dGl0bGU-QWxwaW5lIFR1cm5vdXQ8L3RpdGxlPgogIDxzY3JpcHQgc3JjPSIvL3VucGtnLmNvbS9hbHBpbmUtdHVybm91dCIgZGVmZXI-PC9zY3JpcHQ-CiAgPHNjcmlwdCBzcmM9Ii8vdW5wa2cuY29tL2FscGluZWpzIiBkZWZlcj48L3NjcmlwdD4KPC9oZWFkPgo8Ym9keSB4LWRhdGE-CiAgPG5hdj4KICAgIDxhIGhyZWY9Ii8iPkFscGluZTwvYT4gfCAKICAgIDxhIGhyZWY9Ii90dXJub3V0Ij5UdXJub3V0PC9hPiB8CiAgICA8YiB4LXRleHQ9IiRzdG9yZS50dXJub3V0LnRpdGxlIj48L2I-CiAgPC9uYXY-CgogIDxkaXYgeC1yb3V0ZT0iLyIgeC10aXRsZT0iQWxwaW5lIEhvbWUiPgogICAgPHA-Q2xpY2sgdGhyb3VnaCB0aGUgbWVudS48L3A-CiAgPC9kaXY-CgogIDxkaXYgeC1yb3V0ZT0iL3R1cm5vdXQiIHgtdGl0bGU9IlR1cm5vdXQgUm91dGUiPgogICAgPHA-V2UganVzdCB0dXJuZWQgb3V0IHRvIGJlIGhlcmUuPC9wPgogIDwvZGl2Pgo8L2JvZHk-CjwvaHRtbD4)

### 1. Installation

You can link directly via CDN:

```html

<link rel="stylesheet" href="https://unpkg.com/alpinecss/dist/alpine.min.css">

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

**biensure** GitHub: [@rodezee](https://www.google.com/search?q=https://github.com/rodezee)

