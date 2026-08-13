# Luxury Watches

![App Preview](https://imgix.cosmicjs.com/62dd8480-96a9-11f1-b02c-4df344107e54-autopilot-photo-1587836374828-4dbafa94cf0e-1786578967740.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A cinematic, editorial luxury watch website built for lead generation — inspired by rolex.com. No shopping cart, no checkout: every page guides visitors toward an enquiry or a private viewing request.

## Features

- 🎬 Full-viewport cinematic hero with ken-burns motion
- 🕰️ Featured timepieces carousel pulled from `products` where `featured = true`
- 🏷️ Collections index & detail pages powered by `categories`
- ⌚ Product detail pages with gallery, variant selector, inventory badges & reviews
- 💌 Enquiry form pre-filled with the timepiece of interest
- 📩 Persistent "Request a Private Viewing" CTA + newsletter signup band
- ♿ Fully responsive, accessible, and SEO-ready with per-page metadata & Open Graph tags

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a7d07c84a6cd31d2a9cb000&clone_repository=6a7d40992210f18d917e320a)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for an online store with products (including images, pricing, description, and inventory status), product categories, and customer reviews. User instructions: An luxury watch e-commerce store with products, categories, variants, and customer reviews"

### Code Generation Prompt

> "Build a Next.js application for a company website called "Luxury Watches". The content is managed in Cosmic CMS with the following object types: categories, variants, products, reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: A cinematic, editorial luxury watch website inspired by rolex.com — built for lead generation, not e-commerce checkout. VISUAL STYLE: Full-viewport cinematic hero image with slow parallax/ken-burns motion and a single elegant CTA; deep forest green / near-black / ivory / champagne-gold palette; elegant serif display headings with clean sans-serif body copy; sticky minimal header that turns transparent to solid on scroll; editorial storytelling layout. PAGES: Home, Collections index, Collection detail, Product detail, Heritage, Contact/Enquire. Lead generation only — no add-to-cart, no checkout, no pricing tables, price shown as reference only, enquiry forms and a persistent private-viewing CTA throughout, newsletter signup in the footer. Fully responsive, accessible, and SEO-ready."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — App Router
- [Cosmic](https://www.cosmicjs.com) — headless CMS ([docs](https://www.cosmicjs.com/docs))
- TypeScript
- Tailwind CSS

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed
- A Cosmic account with a bucket containing `products`, `categories`, `variants`, and `reviews` object types

### Installation

```bash
bun install
bun run dev
```

Set the following environment variables (Cosmic keys are configured automatically in your dashboard; add the optional ones below for the enquiry/newsletter emails):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
// Fetch featured products with related category & variants resolved
const { objects } = await cosmic.objects
  .find({ type: 'products', 'metadata.featured': true })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)
```

```typescript
// Fetch reviews for a specific product
const { objects } = await cosmic.objects
  .find({ type: 'reviews', 'metadata.product': productId })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app reads directly from your bucket's `products`, `categories`, `variants`, and `reviews` object types using the [Cosmic SDK](https://www.cosmicjs.com/docs). All data fetching happens server-side to keep your API keys secure.

## Deployment Options

### Vercel
1. Push this repo to GitHub
2. Import into [Vercel](https://vercel.com)
3. Add the environment variables above
4. Deploy

### Netlify
1. Push this repo to GitHub
2. Import into [Netlify](https://www.netlify.com)
3. Set build command `bun run build` and publish directory `.next`
4. Add the environment variables above
5. Deploy

<!-- README_END -->