George — Implementation summary and instructions
===============================================

This package contains a minimal PWA "shell" that launches official Proton and Microsoft web apps.
It is intended as a legal, client-side shortcut system that does NOT redistribute app binaries.

Files included:
- index.html        : landing + redirect logic + PWA UI
- manifest.json     : generic manifest that points start_url to a Proton app
- sw.js             : simple service worker with offline fallback
- offline.html      : offline fallback page
- icons/            : placeholder icons and an 'outlook-liquid.svg' demonstrating Liquid Glass effect
- README.md         : this file

How it works (technical):
- The PWA runs on your domain. When launched, index.html inspects the query parameter 'app' and redirects to the official web app.
- The PWA is installable in modern browsers that support Web App Manifest and Service Workers.
- iOS: "Add to Home Screen" works but service workers have limitations on iOS Safari. Home screen icons are static PNGs; modern CSS effects (backdrop-filter) are not applied to home-screen icons. See notes below for how to bake the Liquid Glass effect into PNG icons.
- Desktop: Chrome/Edge/Firefox will allow install as a PWA from the site menu.

Outlook logo - Liquid Glass support
----------------------------------
- The included icons/outlook-liquid.svg demonstrates a glassmorphism style using gradients, inner-glow and subtle highlights. Modern browsers will show the effect when the SVG is used inline or as an <img> source.
- For home-screen icons (iOS), you must export a PNG that already contains the glass effect. Use a vector editor or ImageMagick/Inkscape to render the SVG at target sizes (180x180, 192x192, 512x512) and upload them as apple-touch-icon PNGs.
  Example ImageMagick rasterize (if you have rsvg-convert or inkscape):
    rsvg-convert -w 512 -h 512 icons/outlook-liquid.svg -o icons/outlook-512.png
    rsvg-convert -w 192 -h 192 icons/outlook-liquid.svg -o icons/outlook-192.png

Security and legal notes
- This PWA opens the official web apps only. Do not attempt to scrape or redistribute proprietary IPAs or signed ADP packages.
- Keep hosting under HTTPS (required for PWAs and service workers).
- If Proton or Microsoft changes their web app URLs or CORS/X-Frame-Options, behavior may change.

Deployment
- Upload the folder to any static HTTPS host (GitHub Pages, Netlify, Vercel).
- Ensure manifest.json, index.html and sw.js are served with correct MIME types; service worker needs HTTPS.
- Add icons and update manifest/icon paths as needed.

Want me to: 
1) produce a ready-to-upload ZIP (I already did), or 
2) generate explicit icon export commands for your platform (Windows/Linux) and give you a ready PNG set?

Download: /mnt/data/proton_microsoft_pwas.zip
