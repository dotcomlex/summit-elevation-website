

## Update Pre-filled SMS Message

### Change
Replace the current SMS body across all 9 files from:

> "Hi! I'm interested in your renovation services. How can you help me?"

To:

> "Hi! I'm interested in your services. Can I get a free estimate?"

URL-encoded: `Hi!%20I'm%20interested%20in%20your%20services.%20Can%20I%20get%20a%20free%20estimate%3F`

### Files to Update (find-and-replace)

All instances of the old encoded body string get replaced with the new one in:

1. `src/components/layout/Navigation.tsx` (4 instances)
2. `src/components/home/HeroSection.tsx` (1)
3. `src/components/home/CTASection.tsx` (1)
4. `src/components/home/ServicesPreview.tsx` (1)
5. `src/components/home/GallerySection.tsx` (1)
6. `src/components/services/ServiceCTA.tsx` (2)
7. `src/components/services/BenefitsSection.tsx` (1)
8. `src/pages/Services.tsx` (2)
9. `src/pages/Gallery.tsx` (1)

One string replacement, applied everywhere.

