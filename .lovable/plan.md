

## Convert All Remaining CTA Buttons to SMS

Several CTA buttons across the site still link to `/contact` instead of opening the SMS app. These need to be updated so every "Get Free Estimate" button works the same way on mobile and desktop.

### Buttons Still Linking to `/contact` (Need Updating)

| File | Location |
|------|----------|
| `src/components/home/HeroSection.tsx` | Hero "Get a Free Estimate" button |
| `src/components/home/ServicesPreview.tsx` | "Get a Free Estimate" button |
| `src/components/home/GallerySection.tsx` | "Get a Free Estimate" button |
| `src/pages/Services.tsx` | Two CTA buttons (hero + bottom section) |
| `src/components/services/BenefitsSection.tsx` | CTA button at bottom of benefits |

### Change Applied to Each

Replace:
```tsx
<Link to="/contact">Get a Free Estimate</Link>
```
with:
```tsx
<a href="sms:+17208189678?body=Hi!%20I'm%20interested%20in%20your%20renovation%20services.%20How%20can%20you%20help%20me%3F">
  Get a Free Estimate
</a>
```

Same SMS format used everywhere else on the site. Six files, one consistent change per button.

