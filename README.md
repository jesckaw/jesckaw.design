# jesckaw.design

Personal portfolio site for Jesckaw — Designer & Creative.

Built with **Next.js 14**, **Framer Motion**, and **Tailwind CSS**.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Fonts**: Cormorant Garamond (display), DM Sans (body), DM Mono

## Customization

### Adding your projects
Edit `components/Work.tsx` — update the `projects` array with your project data and add images to `/public/projects/`.

### Adding your photo
In `components/About.tsx`, replace the placeholder div with:
```tsx
import Image from "next/image";
<Image src="/about-photo.jpg" fill alt="Jesckaw" className="object-cover scale-110" />
```
Then add your photo to `/public/about-photo.jpg`.

### Updating social links
Edit the `socials` array in `components/Contact.tsx`.

### Updating email
Search for `hello@jesckaw.design` and replace with your actual email.

## Deployment

This project is configured for deployment on **Vercel**. 

1. Push to GitHub
2. Import repo in Vercel dashboard
3. Deploy — Vercel auto-detects Next.js

Or connect your GitHub repo to Vercel for automatic deployments on every push.
