# Resume Website - Implementation Plan

## Overview
Build a React resume website for John Doe, a freelance web developer. The homepage features a hero section with name, tagline, and CTA button, plus a main navigation menu with links to About, Projects, and Contact sections. Footer includes social media links to external profiles.

## Architecture

### Component Structure
- **Header** — Navigation menu component with responsive links to About, Projects, Contact
- **Hero** — Hero section displaying name, tagline, and CTA button
- **Footer** — Footer section with social media links
- **SocialLinks** — Container for social icon buttons (Facebook, Twitter, LinkedIn, GitHub)
- **SocialLink** — Individual social icon button component (reusable)
- **App** — Main page component that renders Header, Hero, and Footer

### Tech Stack
- React 18+
- Tailwind CSS for styling
- React Icons (for social media icons)
- React Router (for navigation links)

### Design Approach
- Mobile-first responsive design using Tailwind CSS
- Clean, professional styling suited for a developer portfolio
- Semantic HTML structure for accessibility
- Social icons styled as buttons, external links open in new tab
- Icon-only buttons (no text labels) for a minimal footer aesthetic

### Social Links Details
- **Platforms:** Facebook, Twitter (X), LinkedIn, GitHub
- **Behavior:** Icon buttons that link to external URLs, open in new tab with `rel="noopener noreferrer"`
- **Styling:** Hover effects and responsive layout using Tailwind CSS

## Build Order
1. Install React Icons dependency
2. Build SocialLink component (individual social link icon)
3. Build SocialLinks component (container for all social links)
4. Build Footer component (main footer section)
5. Integrate Footer in App
6. Write tests for new components

---

## Newsletter Form Feature (Mailchimp Embed)

### Overview
Add a Mailchimp newsletter subscription form to the footer, positioned above the social links. The form renders as a native HTML `<form>` that POSTs directly to the Mailchimp-hosted endpoint (classic embed pattern — no API key, no CORS issues). Submission opens the Mailchimp confirmation page in a new tab via `target="_blank"`.

### Component Structure
- **NewsletterForm** — Self-contained form component: email input, submit button, and honeypot hidden field (Mailchimp anti-bot). Accepts `actionUrl` prop so the Mailchimp POST URL can be swapped without touching the component.
- **Footer** (updated) — Renders `NewsletterForm` above the existing `SocialLinks`.

### Mailchimp Embed Details
- Form action URL: placeholder `https://your-subdomain.us1.list-manage.com/subscribe/post?u=XXXX&amp;id=XXXX` (replace before deploy)
- Required hidden fields: `b_<u>_<id>` honeypot (empty, prevents bots), `EMAIL` input name
- Method: `POST`, encoding: `application/x-www-form-urlencoded`
- Target: `_blank` (Mailchimp redirects to hosted confirmation page)

### Build Order
1. Build `NewsletterForm` component with placeholder action URL
2. Update `Footer` to include `NewsletterForm` above `SocialLinks`
3. Write tests for `NewsletterForm` and update `Footer` tests
