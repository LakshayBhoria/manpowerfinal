# S.N. Enterprises website

Static site, no build step. Upload the whole folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages or normal cPanel hosting) so that index.html is at the root.

## Fill in before going live
0. Google Form: create a Google Form, copy its link (Send > link icon) and paste it into CONFIG.googleForm in assets/app.js. The enquiry, request and job forms are then replaced by the Google Form. Leave it empty to keep the WhatsApp forms.
1. assets/app.js, top of file: set CONFIG (WhatsApp number, email, phone). Forms open WhatsApp with the details filled in.
2. index.html: replace the sample address, phone and email on the Contact page and in the JSON-LD block in the head.
3. Replace made-up content: client names in the "Our clients" strip, the "Served in" page, testimonials (marked "(sample)"), job listings, and the stats (5 years, 200+ workers).
4. Once you know the live URL, add a canonical link and og:url / og:image tags in the head.
5. Make sure you have rights to every photo in assets/img.
6. Add a privacy policy page if you collect candidate data.

## Deploy on GitHub Pages
1. Create a public repository and push this folder to the `main` branch (the contents, with `index.html` at the top level).
2. In the repository open Settings > Pages and set Source to "GitHub Actions".
3. The workflow in `.github/workflows/pages.yml` runs on every push to `main` and publishes the site.
4. Live address: https://YOUR-USERNAME.github.io/REPO-NAME/
