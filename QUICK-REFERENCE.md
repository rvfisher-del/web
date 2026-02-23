# 🚀 Grupo Globe - Quick Reference

**Status:** ✅ **READY** | **Preview:** http://localhost:3000

---

## 📋 Quick Actions

### **View Site:**
```bash
# Dev server is running:
http://localhost:3000
```

### **Stop/Start Server:**
```bash
# Stop:
pkill -f "next dev"

# Start:
cd ~/Desktop/marketing/grupo-globe-nextjs && npm run dev
```

### **Edit Content:**
1. Open `app/page.tsx`
2. Find the section you want to edit
3. Update text directly in the component
4. Save → instant browser update ⚡

---

## 🎨 Change Colors

**Location:** `app/globals.css`

```css
--color-orange: #FF8C42          /* Primary accent */
--color-orange-dark: #FF6B35     /* Hover states */
```

Change these values → affects entire site.

---

## 🔧 Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage (all sections) |
| `app/layout.tsx` | Site metadata, fonts |
| `app/globals.css` | Colors, animations |
| `app/components/*` | Individual sections |
| `public/images/*` | All logos and images |

---

## 📱 Sections to Edit

| Section | File | What to Change |
|---------|------|----------------|
| **Header** | `components/Header.tsx` | Navigation links |
| **Hero** | `components/Hero.tsx` | Main headline, CTAs |
| **Logo Bar** | `components/LogoBar.tsx` | Company logos |
| **About** | `components/About.tsx` | Philosophy, pillars |
| **Canadian Standards** | `components/CanadianStandards.tsx` | 3 standards cards |
| **Sectors** | `components/Sectors.tsx` | 5 industry sectors |
| **Values** | `components/Values.tsx` | Impact values |
| **Geographic** | `components/Geographic.tsx` | Canada + Chile |
| **Metrics** | `components/Metrics.tsx` | Numbers (2, 5, 6) |
| **CTA** | `components/CTA.tsx` | Bottom call-to-action |
| **Footer** | `components/Footer.tsx` | Footer links, copyright |

---

## 🎯 Design System Cheat Sheet

### **Spacing:**
```tsx
py-20    // Section vertical padding (medium)
py-32    // Section vertical padding (large)
px-6     // Horizontal padding (mobile)
px-8     // Horizontal padding (desktop)
mb-6     // Margin bottom (small)
mb-12    // Margin bottom (large)
```

### **Typography:**
```tsx
text-4xl md:text-5xl lg:text-6xl    // Responsive headline
font-bold                            // Bold weight (600-700)
tracking-tight                       // Tight letter spacing
leading-relaxed                      // Relaxed line height
uppercase                            // UPPERCASE text
```

### **Colors:**
```tsx
text-white           // White text
text-gray-900        // Almost black
bg-gradient-to-r from-[#FF8C42] to-[#FF7420]  // Orange gradient
border-[#FF8C42]     // Orange border
```

### **Hover Effects:**
```tsx
hover:shadow-xl           // Lift shadow on hover
hover:scale-105           // Slight scale up
transition-all duration-300  // Smooth transition
```

---

## 🔄 Common Tasks

### **Add New Section:**
1. Create `app/components/NewSection.tsx`
2. Import it in `app/page.tsx`
3. Add `<NewSection />` where you want it

### **Change Button Colors:**
```tsx
// Orange gradient button:
className="bg-gradient-to-r from-[#FF8C42] to-[#FF7420]"

// Ghost white button:
className="bg-white/10 backdrop-blur-sm border-2 border-white/30"
```

### **Update Logo:**
Replace file in `public/images/logos/logo-grupo-globe.png`

### **Update Hero Image:**
Replace file in `public/images/hero/opening-image.png`

---

## 🌐 Deploy to Production

### **Vercel (Easiest):**
```bash
npm install -g vercel
vercel
```

### **Build + Run Locally:**
```bash
npm run build
npm start
```

---

## 📚 Full Documentation

- **ROB-FINAL-SUMMARY.md** - Complete overview
- **START-HERE.md** - Getting started guide
- **NEXTJS-CONVERSION-SUMMARY.md** - Technical details
- **DEPLOYMENT-READY.md** - Deployment options

---

## ✅ Pure Tailwind = Easy Editing

**No custom CSS files!** Everything is Tailwind utility classes.

**Example:**
```tsx
<h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
  Your Headline Here
</h2>
```

**Change:**
- `text-3xl` → `text-4xl` (bigger)
- `text-gray-900` → `text-black` (darker)
- `mb-6` → `mb-12` (more space below)

Save → instant update in browser! ⚡

---

## 🎊 You're All Set!

**Preview:** http://localhost:3000

The Grupo Globe website is ready with:
- ✅ Next.js 16 + Tailwind CSS 4
- ✅ Pure Tailwind utility classes
- ✅ Warm orange aesthetic
- ✅ Professional, minimalist design
- ✅ All content from HTML version

**"El estándar. No la excepción."** 🍁

---

**Questions?** Read the full documentation files above!
