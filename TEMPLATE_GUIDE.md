# Template Customization Guide

This guide will walk you through customizing this template for any barbershop.

## Quick Start Checklist

- [ ] Update business information in `config/site.ts`
- [ ] Replace images in `public/images/`
- [ ] Update environment variables in `.env.local`
- [ ] Customize colors in `tailwind.config.ts` (optional)
- [ ] Update social media links
- [ ] Test locally with `npm run dev`
- [ ] Deploy to Vercel

## Step-by-Step Customization

### 1. Business Information (config/site.ts)

This is the single most important file to customize. All business data is centralized here.

```typescript
export const siteConfig = {
  business: {
    // Update these fields with your barbershop's info
    name: "Your Barber Shop Name",
    tagline: "Your Unique Selling Proposition",
    description: "A compelling description of your barbershop (150-200 characters)",

    address: {
      street: "123 Your Street",
      city: "Your City",
      state: "CA",
      zip: "12345",
      country: "United States",
    },

    phone: "(555) 123-4567",
    email: "info@yourbarbershop.com",

    hours: {
      monday: "9:00 AM - 7:00 PM",
      tuesday: "9:00 AM - 7:00 PM",
      wednesday: "9:00 AM - 7:00 PM",
      thursday: "9:00 AM - 7:00 PM",
      friday: "9:00 AM - 8:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "10:00 AM - 5:00 PM",
    },

    coordinates: {
      // Get these from Google Maps
      latitude: 40.7128,
      longitude: -74.0060,
    },
  },

  domain: "yourdomain.com",
  url: "https://yourdomain.com",

  booksy: {
    // Get this from your Booksy account
    url: "https://booksy.com/YOUR_BUSINESS_URL",
    widgetId: "YOUR_WIDGET_ID",
  },

  services: [
    // Customize your services - add or remove as needed
    {
      id: "haircut",
      name: "Haircut",
      description: "Description of your haircut service",
      price: "$XX",
      duration: "XX min",
      popular: true, // Mark your most popular services
    },
    // Add more services...
  ],

  social: {
    instagram: "https://instagram.com/yourshop",
    facebook: "https://facebook.com/yourshop",
    yelp: "https://yelp.com/biz/yourshop",
  },

  seo: {
    keywords: [
      "barbershop your-city",
      "mens haircut your-city",
      // Add relevant keywords for your area
    ],
  },
};
```

### 2. Environment Variables (.env.local)

Create this file from `.env.example`:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_BOOKSY_URL=https://booksy.com/YOUR_BUSINESS_URL
NEXT_PUBLIC_BUSINESS_NAME=Your Barber Shop Name
```

### 3. Images (public/images/)

Replace these placeholder images with your own:

**Required Images:**
- `hero.jpg` (1920x1080px recommended) - Hero section background
- `logo.png` (512x512px recommended) - Your logo

**Gallery Images:**
- Add 6-12 images of your barbershop
- Name them: `gallery-1.jpg`, `gallery-2.jpg`, etc.
- Recommended size: 800x800px or 1200x1200px

**Image Tips:**
- Use high-quality images
- Optimize before uploading (use tools like TinyPNG)
- Show your space, team, and work
- Ensure good lighting

### 4. Update Gallery Component (if adding real images)

Edit `components/sections/Gallery.tsx`:

```typescript
// Replace the placeholder array with:
const images = [
  { id: 1, src: "/images/gallery-1.jpg", alt: "Description 1" },
  { id: 2, src: "/images/gallery-2.jpg", alt: "Description 2" },
  // Add more images...
];

// Then update the component to use next/image:
import Image from "next/image";

<Image
  src={image.src}
  alt={image.alt}
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### 5. Theme Colors (Optional)

If you want to change from red/gold to your brand colors, edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#YOUR_PRIMARY_COLOR',
    600: '#YOUR_PRIMARY_COLOR_DARKER',
    700: '#YOUR_PRIMARY_COLOR_DARKEST',
  },
  accent: {
    500: '#YOUR_ACCENT_COLOR',
    600: '#YOUR_ACCENT_COLOR_DARKER',
  },
}
```

**Color Palette Tools:**
- [Coolors.co](https://coolors.co) - Generate color palettes
- [ColorBox](https://colorbox.io) - Create color scales

### 6. About Section Content

Edit the content in `components/sections/About.tsx` to tell your unique story.

### 7. Services

Update the services array in `config/site.ts`:
- Add/remove services as needed
- Set accurate prices and durations
- Mark your most popular services with `popular: true`

### 8. Booksy Integration

#### Getting Your Booksy URL:
1. Log in to your Booksy business account
2. Go to Settings → Online Booking
3. Copy your booking page URL
4. Update in `config/site.ts` and `.env.local`

#### Widget ID:
- Extract the numeric ID from your Booksy URL
- Example: `booksy.com/123456_your-shop` → Widget ID is `123456`

### 9. Social Media Links

Update in `config/site.ts`:
```typescript
social: {
  instagram: "https://instagram.com/yourhandle",
  facebook: "https://facebook.com/yourpage",
  yelp: "https://yelp.com/biz/yourbusiness",
}
```

If you don't have certain platforms, remove them or set to empty string.

### 10. SEO Keywords

Update keywords in `config/site.ts` for better local SEO:

```typescript
seo: {
  keywords: [
    "barbershop [your-city]",
    "mens haircut [your-neighborhood]",
    "beard trim [your-city]",
    "[your-shop-name]",
    // Add 5-10 relevant local keywords
  ],
}
```

## Testing Your Changes

### Local Testing

1. Start dev server:
```bash
npm run dev
```

2. Open http://localhost:3000

3. Test on different screen sizes:
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1920px)

4. Check all sections:
   - [ ] Hero section displays correctly
   - [ ] Services load with correct info
   - [ ] Gallery images display
   - [ ] About section tells your story
   - [ ] Contact info is accurate
   - [ ] Booksy widget loads
   - [ ] Navigation works smoothly
   - [ ] Mobile menu functions

### Build Testing

```bash
npm run build
npm run start
```

Check for:
- No build errors
- All pages render
- Images optimized
- Sitemap generated

## Deployment to Vercel

### Initial Setup

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables:**
   - Add `NEXT_PUBLIC_SITE_URL`
   - Add `NEXT_PUBLIC_BOOKSY_URL`
   - Deploy!

4. **Add Custom Domain:**
   - In Vercel project settings
   - Go to Domains
   - Add your domain (yourdomain.com)
   - Update DNS records as instructed

### DNS Configuration

Point your domain to Vercel:
- A Record: `76.76.21.21`
- CNAME Record: `cname.vercel-dns.com`

## Advanced Customizations

### Adding New Sections

1. Create component in `components/sections/`
2. Import in `app/page.tsx`
3. Add between existing sections

### Custom Fonts

1. Add font files to `app/fonts/`
2. Import in `app/layout.tsx`
3. Apply in Tailwind config

### Adding Blog/News

1. Create `app/blog/` directory
2. Add `page.tsx` for blog listing
3. Add `[slug]/page.tsx` for individual posts
4. Update navigation in Header component

### Analytics Integration

Add to `app/layout.tsx`:
```typescript
// Google Analytics
<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `}
</Script>
```

## Maintenance

### Regular Updates

- Update business hours for holidays
- Add new services as offered
- Refresh gallery images monthly
- Update pricing as needed

### Keeping Dependencies Updated

```bash
npm outdated
npm update
```

### Monitoring

- Check Vercel deployment logs
- Monitor Vercel Analytics
- Test Booksy widget regularly
- Review Google Search Console

## Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run build`
- Verify all imports are correct
- Ensure environment variables are set

### Images Not Loading
- Verify images are in `public/images/`
- Check file extensions match imports
- Ensure images are optimized (< 2MB each)

### Booksy Widget Not Loading
- Verify Booksy URL is correct
- Check iframe sandbox permissions
- Test Booksy URL directly in browser

### Styling Issues
- Clear browser cache
- Rebuild: `npm run build`
- Check Tailwind classes are correct

## Support

If you encounter issues:
1. Check the main README.md
2. Review Next.js 14 documentation
3. Check Vercel deployment logs
4. Create an issue in the repository

## Success Checklist

Before going live:
- [ ] All business info is accurate
- [ ] Images are high-quality and optimized
- [ ] Booksy widget works correctly
- [ ] All links are functional
- [ ] Mobile responsive on all pages
- [ ] Contact information is correct
- [ ] Social media links work
- [ ] Domain is connected
- [ ] SSL certificate is active
- [ ] SEO metadata is customized
- [ ] Sitemap is generated
- [ ] Tested on multiple devices/browsers

---

Congratulations! Your barbershop website is ready to launch. 🎉
