# Jaison A S — Portfolio

A responsive, single-page portfolio built with HTML, CSS, and vanilla JavaScript. The content is kept in small data files so you can update the profile without editing the page layout.

## Preview locally

No build step or package installation is required. Open `index.html` in a browser, or serve the folder with any static web server. For example, if Python is installed:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Project structure

```text
.
├── index.html
├── css/
│   └── style.css
├── data/
│   ├── certifications.js
│   ├── education.js
│   ├── experience.js
│   ├── profile.js
│   ├── projects.js
│   └── social.js
├── images/
│   ├── favicon.svg
│   ├── og-image.jpg
│   └── profile.jpg
└── js/
    └── main.js
```

## Update the content

Edit the data file for the section you want to change. These files use JavaScript objects and arrays assigned to `window`, not standalone JSON files. Keep the existing field names and valid JavaScript syntax.

- `data/profile.js` — name, photo path, headline, rotating role labels, About text, skills, and stats.
- `data/social.js` — WhatsApp number and message, LinkedIn, email, Instagram, and blog links.
- `data/experience.js` — jobs grouped by company. Add roles to a company's `roles` array to show promotions or role changes under the same employer.
- `data/projects.js` — project title, description, tags, and optional link.
- `data/education.js` — degree, school, dates, and description.
- `data/certifications.js` — certification, issuer, year, and optional verification link.

For example, experience entries follow this shape:

```js
{
  "company": "Example Company",
  "location": "City · Remote",
  "roles": [
    {
      "title": "Senior Engineer",
      "type": "Full-time",
      "period": "Jan 2024 – Present",
      "description": "A short summary of the role.",
      "tags": ["JavaScript", "Cloud"]
    },
    {
      "title": "Engineer",
      "type": "Full-time",
      "period": "Jan 2022 – Dec 2023",
      "description": "A short summary of the earlier role.",
      "tags": ["Web Development"]
    }
  ]
}
```

The `link` value for a project or certification can be an empty string (`""`) when there is no public link.

## Customize the appearance

- Edit `css/style.css` to adjust colors, typography, spacing, breakpoints, and animations.
- Edit `js/main.js` to change how data is rendered or how interactions behave.
- Replace `images/profile.jpg` with your own portrait, and update `PROFILE.photo` in `data/profile.js` if you use a different path.
- `images/favicon.svg` is the single favicon linked by `index.html`; it contains the profile photo embedded in the SVG.
- `images/og-image.jpg` is the 1200 × 630 social preview image used by Open Graph and Twitter metadata. Update its public URL in `index.html` if the deployment URL changes.

The site loads the Space Grotesk font from Google Fonts, so an internet connection is needed for that font. A system-font fallback is provided.
