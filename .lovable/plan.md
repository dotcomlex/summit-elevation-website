

## Conversion-Focused CTA Overhaul

### What Changes

1. **Add CTA button to desktop navigation bar** — Next to the nav links, add a visible "Text Us Now" button
2. **Switch ALL CTA links site-wide from `tel:` to `sms:`** — Every "Get Free Quote" / "Get Free Estimate" button will open the user's SMS app instead of calling

### SMS Link Format

All CTA `href` values change from:
```
href="tel:+17208189678"
```
to:
```
href="sms:+17208189678?body=Hi!%20I'm%20interested%20in%20your%20renovation%20services.%20How%20can%20you%20help%20me%3F"
```

The pre-filled message: *"Hi! I'm interested in your renovation services. How can you help me?"*

This works on both iOS and Android to open the native SMS app with the number and message pre-populated.

### Files to Edit

| File | Change |
|------|--------|
| `src/components/layout/Navigation.tsx` | Add CTA button after desktop nav links; change all `tel:` → `sms:` (mobile menu button, phone link, floating CTA) |
| `src/components/home/CTASection.tsx` | Change `tel:` → `sms:` |
| `src/components/services/ServiceCTA.tsx` | Change both `tel:` → `sms:` |
| `src/pages/Gallery.tsx` | Change `tel:` → `sms:` |
| `src/components/layout/Footer.tsx` | Keep `tel:` for the phone number display (users expect to call from footer), but could also switch — your call |

### Desktop Nav Button Detail

In `Navigation.tsx`, after the `<nav>` block (line 86), add:
```tsx
<Button asChild size="sm" className="ml-6 bg-primary hover:bg-primary/90 text-white font-semibold px-5">
  <a href="sms:+17208189678?body=...">
    Text Us Now
    <MessageSquare className="ml-2 h-4 w-4" />
  </a>
</Button>
```

The desktop layout becomes: **Logo (left) — Nav Links — CTA Button (right)**

### Notes
- Footer phone number link stays as `tel:` since it displays the number and users expect to call from there
- The floating bottom-right CTA also switches to SMS
- Mobile menu CTA also switches to SMS

