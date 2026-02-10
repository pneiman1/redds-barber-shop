# Redd's Barber Shop PBD - Next.js Template

A production-ready Next.js 14 barbershop website template featuring a modern dark theme with red/gold accents, Booksy integration for appointments, and comprehensive SEO optimization.

## Features

- 🎨 **Modern Dark Theme** - Custom Tailwind CSS theme with red and gold accents
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Performance Optimized** - Fast page loads with Next.js 14 App Router
- 🎭 **Smooth Animations** - Framer Motion for professional animations
- 📅 **Booksy Integration** - Embedded booking widget for easy appointments
- 🔍 **SEO Optimized** - Comprehensive metadata and JSON-LD structured data
- 🚀 **Vercel Ready** - Optimized for deployment to Vercel
- 🎯 **Template Ready** - Easy to customize for any barbershop

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd booksy-template
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment variables:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_BOOKSY_URL=https://booksy.com/YOUR_BOOKSY_URL
NEXT_PUBLIC_BUSINESS_NAME=Your Barber Shop Name
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

### 1. Business Configuration

Edit `config/site.ts` to update all business information:

```typescript
export const siteConfig = {
  business: {
    name: "Your Barber Shop Name",
    tagline: "Your Tagline",
    description: "Your description...",
    address: { /* Update address */ },
    phone: "Your phone number",
    email: "Your email",
    hours: { /* Update hours */ },
  },
  // ... update other fields
};
```

### 2. Theme Colors

Modify `tailwind.config.ts` to change brand colors:

```typescript
colors: {
  primary: { 500: '#your-color' }, // Change red
  accent: { 500: '#your-color' },  // Change gold
}
```

### 3. Images

Replace images in the `public/images/` directory:
- `hero.jpg` - Hero section background
- `logo.png` - Business logo
- Gallery images

### 4. Services

Update services in `config/site.ts`:

```typescript
services: [
  {
    id: "service-id",
    name: "Service Name",
    description: "Service description...",
    price: "$XX",
    duration: "XX min",
    popular: true/false,
  },
  // ... more services
]
```

### 5. Booksy Integration

Update your Booksy URL in:
- `.env.local` - NEXT_PUBLIC_BOOKSY_URL
- `config/site.ts` - booksy.url and booksy.widgetId

## Project Structure

```
booksy-template/
├── app/
│   ├── layout.tsx              # Root layout with SEO
│   ├── page.tsx                # Main landing page
│   └── globals.css             # Global styles
├── components/
│   ├── sections/               # Page sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── ui/                     # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   ├── Container.tsx
│   │   └── BookingWidget.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── animations/
│       ├── FadeIn.tsx
│       └── ScrollReveal.tsx
├── lib/
│   ├── utils.ts               # Utility functions
│   ├── constants.ts           # App constants
│   └── structured-data.ts     # JSON-LD schema
├── config/
│   └── site.ts                # Business configuration
├── public/
│   └── images/                # Static assets
└── [config files]
```

## Building for Production

1. Build the application:
```bash
npm run build
```

2. Test the production build locally:
```bash
npm run start
```

3. The build will automatically:
   - Generate optimized static pages
   - Create sitemap.xml
   - Generate robots.txt
   - Optimize images

## Deployment to Vercel

1. Push your code to GitHub

2. Import your repository in [Vercel](https://vercel.com)

3. Configure environment variables in Vercel:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_BOOKSY_URL`

4. Deploy!

5. Add your custom domain in Vercel settings

## SEO Features

- ✅ Comprehensive metadata (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (BarberShop, Organization)
- ✅ Automatic sitemap generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Mobile-friendly design

## Performance Optimizations

- Image optimization with next/image
- Automatic code splitting
- Framer Motion tree-shaking
- Static page generation
- Lazy loading for below-fold content
- Font optimization
- Compression enabled

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

MIT License - feel free to use this template for your barbershop website.

## Support

For issues or questions, please create an issue in the repository.

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS
