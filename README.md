# Grupo Globe - Next.js Website

## 🚀 Quick Start

The development server is already running at:
- **Local:** http://localhost:3000
- **Network:** http://192.168.10.13:3000

## 🛠️ Tech Stack

- **Next.js 16** - Latest version with App Router
- **Tailwind CSS 4** - Pure utility classes (no custom CSS)
- **TypeScript** - Full type safety
- **Inter Font** - Swiss/Geneva-style typography

## 📐 Design Principles

✅ **Brookfield-inspired premium aesthetic**
- Warm, approachable tone (not cold corporate)
- Orange gradients (#FF8C42) maintained
- UPPERCASE headlines (tasteful, not aggressive)
- Generous negative space
- Subtle scroll animations

## 📑 Key Sections Built

1. ✅ Header with navigation (sticky, transparent → solid on scroll)
2. ✅ Hero section with background image & scroll indicator
3. ✅ Logo bar (animated slider with 6 subsidiaries)
4. ✅ About/Philosophy section with Three Pillars
5. ✅ Canadian Standards section (emphasized as requested)
6. ✅ Sectors grid (5 sectors + CTA tile)
7. ✅ Values section
8. ✅ Geographic section (Canada & Chile)
9. ✅ Metrics/Numbers section
10. ✅ CTA section
11. ✅ Footer

## 🎨 Design Features

- **Subtle animations** (Brookfield-style, no flashy effects)
- **Scroll indicators** where appropriate
- **Hover effects** on cards and buttons
- **Orange gradient CTAs** throughout
- **Responsive design** (mobile, tablet, desktop)
- **Smooth scrolling** between sections

## 📂 Project Structure

```
grupo-globe-nextjs/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── LogoBar.tsx
│   │   ├── About.tsx
│   │   ├── CanadianStandards.tsx
│   │   ├── Sectors.tsx
│   │   ├── Values.tsx
│   │   ├── Geographic.tsx
│   │   ├── Metrics.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── globals.css (Tailwind 4 + Inter font)
│   ├── layout.tsx (Metadata & SEO)
│   └── page.tsx (Main page composition)
├── public/
│   └── images/ (All logos, hero, geographic images)
└── package.json
```

## 🎯 Content Consolidation

- ✅ Streamlined without over-trimming
- ✅ Better flow between sections
- ✅ Breathing room with generous spacing
- ✅ Key messages emphasized (Canadian Standards)

## 🔧 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 Notes

- All styling uses **pure Tailwind utility classes** (no custom CSS files except font imports)
- Images copied from `~/Desktop/marketing/website-build/images/`
- Fully responsive and mobile-optimized
- SEO metadata configured in `layout.tsx`

## 🎨 Next Steps (Optional)

- [ ] Replace placeholder metrics (XXX+) with real numbers
- [ ] Add actual company detail pages
- [ ] Connect contact form to backend
- [ ] Add more animations if desired
- [ ] Optimize images for production
- [ ] Add analytics tracking

---

**Built with Next.js 16 + Tailwind 4 | Ready for preview! 🚀**
