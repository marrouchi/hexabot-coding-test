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
