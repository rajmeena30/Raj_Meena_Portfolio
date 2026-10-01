# Raj Meena — Portfolio

Single-page personal portfolio built with **React, Vite, Tailwind CSS 3, Framer Motion and Lucide React**.
Frontend only. No database or backend. Ready for Vercel.

---

## 0. Design notes

Dark-first design on a near-black base (inspired by the EXSORA site's black theme), with a
blue → violet → cyan accent gradient, aurora glow, grid backdrop, cursor-follow card glow,
skill ticker, scroll-progress bar and animated gradient name. All colours are CSS variables at the top of
`src/styles/index.css` (`--accent`, `--accent2`, `--accent3`). Light theme uses deeper versions of the same hues.

## 1. Install and run

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

## 2. Build and preview

```bash
npm run build      # outputs to /dist
npm run preview    # serves the production build locally
```

Check the production build (`npm run preview`) before each deploy. Placeholder projects only appear in
`npm run dev`; they are hidden in the production build.

---

## 3. Which file do I edit?

| I want to change…              | Edit this                                         |
| ------------------------------ | ------------------------------------------------- |
| Name, email, phone, tagline    | `src/data/portfolioData.js` → `site`              |
| Profile photo                  | `public/images/` (see section 6)                  |
| Projects                       | `src/data/portfolioData.js` → `projects`          |
| Experience                     | `src/data/portfolioData.js` → `experience`        |
| Skills and tools               | `src/data/portfolioData.js` → `skillGroups`       |
| Services                       | `primaryServices`, `secondaryServices`            |
| About text                     | `about`                                           |
| Current focus, education       | `current`, `education`                            |
| Social links                   | `socials`                                         |
| Certificates, testimonials     | `certificates`, `testimonials`                    |
| Colours                        | `src/styles/index.css` (CSS variables at the top) |
| Fonts                          | `index.html` (Google Fonts link) + `tailwind.config.js` |
| SEO, meta tags, structured data| `index.html`, `public/robots.txt`, `public/sitemap.xml` |

Section layouts live in `src/sections/`, shared pieces in `src/components/`.

---

## 4. Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project**, import the repository.
3. Vercel detects Vite automatically (build command `npm run build`, output `dist`).
4. Add the environment variable from section 11, then **Deploy**.

## 5. Connect rajmeena.in

1. In Vercel open the project → **Settings → Domains** → add `rajmeena.in` (and `www.rajmeena.in`).
2. Vercel shows the DNS records to create. At your domain registrar add them
   (usually an `A` record for the root domain and a `CNAME` for `www`).
3. Wait for DNS to update (minutes to a few hours). HTTPS is issued automatically.
4. Set one of the two domains to redirect to the other so the canonical URL stays `https://rajmeena.in/`.

---

## 6. Change the profile photo

Replace these files in `public/images/`, keeping the same names:

- `raj-meena.jpg` — full-size fallback, also used in structured data
- `raj-meena-480.webp`, `raj-meena-800.webp`, `raj-meena-1057.webp` — responsive sizes

Keep a portrait ratio close to 5:6 or taller. If your new image has different dimensions, update
`width` and `height` in `profileImage` (`portfolioData.js`). Also replace `public/og-image.jpg`
(1200×630) if you want the link-preview image to change.

To make the WebP sizes, use any image tool (for example squoosh.app) and export at 480, 800 and 1057 px wide.

## 7. Add or update projects

Open `src/data/portfolioData.js` and find `projects`. The first entry is a **placeholder**
(`placeholder: true`) that only shows in development. To add a real project, add an object:

```js
{
  id: 'my-project',
  title: 'Real project name',
  category: 'Business website',
  year: '2026',
  summary: 'One or two sentences on what it is.',
  problem: 'What the client needed.',
  role: 'What you did.',
  tech: ['React', 'Node.js'],
  image: '/images/projects/my-project.webp',   // put the file in public/images/projects/
  imageAlt: 'Screenshot of the homepage',
  liveUrl: 'https://example.com',
  githubUrl: '',        // optional
  caseStudyUrl: '',     // optional
}
```

Delete the placeholder entry when you add your first real project. Leave a field empty and it is hidden.
Only add details you can verify.

## 8. Update experience

`experience` in `portfolioData.js`. Set `current: true` on the role you hold now; that entry gets the
larger layout. Each `points` line is one bullet.

## 9. Update skills

`skillGroups` in `portfolioData.js`. Add or remove items in a group, or add a new group object.
There are intentionally no percentage bars.

## 10. Update social links

`socials` in `portfolioData.js`. To add a new network, also add its icon in
`src/components/SocialLinks.jsx`.

---

## 11. Contact form and environment variables

The form posts to [Formspree](https://formspree.io) (free plan works).

1. Create a Formspree account and a new form. Copy its endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
2. **Locally:** copy `.env.example` to `.env` and set `VITE_FORMSPREE_ENDPOINT=<your endpoint>`. Restart `npm run dev`.
3. **On Vercel:** Project → **Settings → Environment Variables** → add `VITE_FORMSPREE_ENDPOINT` for
   Production (and Preview if you want). **Redeploy**, because Vite reads it at build time.
4. In Formspree, confirm the notification email address and (optional) restrict the form to your domain.

The endpoint URL is public by design. Never put private API keys in any `VITE_` variable.

If the variable is empty, the form still works: the button becomes **Send by email** and opens the
visitor's email app with the message filled in. Spam is reduced with a hidden honeypot field; Formspree adds its own filtering.

## 12. SEO

- Title, description, Open Graph and Twitter tags, canonical URL and Person JSON-LD are in `index.html`.
- `public/robots.txt` and `public/sitemap.xml` point to `https://rajmeena.in/`.
- Update `lastmod` in `sitemap.xml` when you make big changes.
- After deploy, add the site in Google Search Console and submit the sitemap.
- Validate structured data at https://validator.schema.org/ and link previews with the LinkedIn Post Inspector.

Note: this is a client-rendered React app. `index.html` includes a short plain-HTML fallback so crawlers
and no-JS visitors still see your name, title and email.

## 13. Theme

Dark and light themes use the CSS variables at the top of `src/styles/index.css`. The choice is saved in
`localStorage`; first-time visitors get their system preference. Change the accent colour by editing
`--accent` in both themes.

## 14. Accessibility and motion

Semantic landmarks, skip link, visible focus states, labelled form fields with error messages, and a
theme toggle with a descriptive label. Animations switch off when the visitor has "reduce motion"
enabled; the magnetic button effect only runs on mouse devices.

## Project structure

```
public/            favicon, images, robots.txt, sitemap.xml, manifest
src/
  components/      Navbar, Button, Reveal, ContactForm, ...
  sections/        Hero, About, Experience, Skills, Services, Work, Focus, Contact, Footer
  data/            portfolioData.js  (all editable content)
  hooks/           useTheme, useActiveSection, useFinePointer
  styles/          index.css (design tokens + Tailwind)
```
