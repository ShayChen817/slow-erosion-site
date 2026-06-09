# Slow Erosion Official Website

Single-page official homepage for Slow Erosion, built with plain HTML/CSS/JS for static deployment.

## Run Locally

```powershell
node server.mjs
```

Open `http://localhost:4173`.

You can also serve the folder with any static server. The app has no install step.

## Asset Map

- `assets/video/hero-bg.mp4`: current hero video hard-linked from the original `背景视频.mp4`
- `assets/video/hero-bg.webm`: expected optimized WebM source, not generated because ffmpeg is not available in this workspace
- `assets/video/mobile-mv-bg.mp4`: mobile footer background video copied from `手机版MV切片无文字.mp4`
- `assets/video/logo-intro.webm` and `assets/video/logo-intro.mp4`: expected converted preloader intro sources
- `assets/video/logo-intro-source.mkv`: hard-linked original MKV source for conversion
- `assets/img/logo-default.png`: optimized frontend copy of the source logo
- `assets/img/hero-poster.jpg`: dark poster generated from `band-01.jpg`
- `assets/img/fever-dream-cover-source.png`: original Fever Dream single cover copy
- `assets/img/fever-dream-cover.webp`: optimized cover used by the release card
- `assets/img/logo-window.*` and `favicon-window-*.png`: browser/window logo assets generated from `SLOW EROSION(effects1).jpg`

## Contact Messages

Footer messages are posted to `POST /api/messages` and appended to `data/messages.jsonl`.
The WeChat window currently uses a QR placeholder; replace that block in `index.html` when the final QR image is ready.

## Video Conversion Commands

Run these after installing ffmpeg:

```powershell
ffmpeg -i "背景视频.mp4" -vf "scale=-2:1080,fps=24" -c:v libx264 -preset slow -crf 28 -an -movflags +faststart "assets/video/hero-bg.mp4"
ffmpeg -i "背景视频.mp4" -vf "scale=-2:1080,fps=24" -c:v libvpx-vp9 -crf 34 -b:v 0 -an "assets/video/hero-bg.webm"
ffmpeg -i "logo动画效果黑色背景.mkv" -vf "scale=-2:1080,fps=30" -c:v libvpx-vp9 -crf 32 -b:v 0 -an "assets/video/logo-intro.webm"
ffmpeg -i "logo动画效果黑色背景.mkv" -vf "scale=-2:1080,fps=30" -c:v libx264 -preset slow -crf 24 -an -movflags +faststart "assets/video/logo-intro.mp4"
```

Aim for a production hero video under 15MB before deployment.

## Link Configuration

Navigation and social placeholders live at the top of `script.js` in `NAV_ITEMS` and `SOCIAL_LINKS`.
