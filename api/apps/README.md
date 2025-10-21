
Updated package for George — Proton & Microsoft PWAs (v2)
-------------------------------------------------------

What changed:
- Replaced placeholder 'G' PNGs with nicer gradient SVG icons with initials.
- Removed Proton Mail, Proton Pass, Proton Drive, and Outlook from the "to-add" list — only remaining apps are included.
- Outlook has a Liquid Glass SVG included for in-browser use (/icons/outlook-liquid.svg).
- All icons are SVG to avoid rasterization issues; for iOS home-screen icons, export PNGs from the SVGs (instructions below).

Deployment:
- Upload this folder to any static HTTPS host (GitHub Pages, Netlify, Vercel).
- Ensure manifest.json is available at root and service worker is served over HTTPS.
- On iPhone, use 'Add to Home Screen' in Safari to add the PWA. Note: iOS uses static PNG icons for home screen; use an SVG->PNG export tool to create 180x180 / 512x512 PNGs if needed.

Icon export (example using rsvg-convert or inkscape):
  rsvg-convert -w 512 -h 512 icons/outlook-liquid.svg -o icons/outlook-512.png
  rsvg-convert -w 180 -h 180 icons/outlook-liquid.svg -o icons/outlook-180.png

Files in this package:
- index.html, manifest.json, sw.js, offline.html
- icons/*.svg (proton-calendar, proton-docs, onedrive, word, excel, ppt, teams, outlook-liquid)
