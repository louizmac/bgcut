<div align="center">

# bgcut

**Remove backgrounds in seconds – 100% local, 100% private.**

<p>
  <a href="https://github.com/louizmac/bgcut/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT">
  </a>
  <img src="https://img.shields.io/badge/runs%20in-browser-brightgreen" alt="Runs in browser">
  <img src="https://img.shields.io/badge/powered%20by-bg0-orange" alt="Powered by bg0">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen" alt="PRs welcome">
</p>

<p>
  <a href="https://github.com/louizmac/bgcut">GitHub</a> ·
  <a href="https://github.com/louizmac">Author</a>
</p>

</div>

---

## What is bgcut?

bgcut is a minimal, browser-based background remover. Drop an image, click a button, and get a transparent PNG – without uploading anything to a server.

It is built on top of **[BG0](https://github.com/opencoredev/bg0)** (`@bg0/browser`), an open-source background-removal library that runs entirely in the browser using WebGPU or WebAssembly. That means:

- **No server costs** – there is no backend at all.
- **No API keys** – no third-party service to sign up for.
- **No image uploads** – the model runs locally on the user's device.
- **No usage limits** – the model is cached after the first load.

## Features

- 🖱️ **Drag & drop or click to upload** – works with PNG, JPG, and WEBP.
- ⚡ **One-click removal** – no settings, no sign-up.
- 🔒 **Private by default** – images never leave the browser.
- 📦 **No backend required** – pure HTML, CSS, and JavaScript.
- 📥 **Download the result** – transparent PNG, ready to use.
- 🎨 **Clean, animated UI** – lightweight and responsive.

## Quick Start

bgcut is a static site. To run it locally, you only need a simple static file server.

```bash
git clone https://github.com/louizmac/bgcut.git
cd bgcut
npx serve .
```

Then open the URL shown in your terminal (usually `http://localhost:3000`).

> **Note:** Because the site uses ES modules, you need to serve it over HTTP – opening `index.html` directly with `file://` will not work.

## How It Works

1. The user selects an image via the upload zone.
2. `@bg0/browser` detects whether WebGPU is available and falls back to WebAssembly if not.
3. A pinned BiRefNet ONNX model is downloaded once and cached in the browser.
4. The model runs locally, produces an alpha mask, and composites a transparent PNG.
5. The result is displayed next to the original and can be downloaded.

No image data is sent over the network at any point.

## Built With

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) (custom properties, grid, animations)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (ES modules)
- **[@bg0/browser](https://github.com/opencoredev/bg0)** – browser-native background removal

## Browser Support

bgcut works in modern browsers that support ES modules. For the best performance, use a browser with **WebGPU** support (e.g., recent versions of Chrome or Edge). If WebGPU is unavailable, bg0 automatically falls back to WebAssembly.

## License

This project is licensed under the **MIT License**. See the [`LICENSE`](./LICENSE) file for details.

The underlying background-removal library, [BG0](https://github.com/opencoredev/bg0), is licensed under the **Apache License 2.0**. The model weights retain the licenses listed in the BG0 repository's [`THIRD_PARTY_NOTICES.md`](https://github.com/opencoredev/bg0/blob/main/THIRD_PARTY_NOTICES.md).

---

<div align="center">

**If bgcut saves you time, consider giving it a ⭐**

</div>
