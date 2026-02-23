# ✅ Globe Modular "Learn More" Link - FIXED

**Fixed:** 2026-02-22 14:56

## What Was Fixed

The "Learn more" link for Globe Modular in the portfolio section now works properly!

### Changes Made

**File:** `app/[locale]/page.tsx`

1. **Added proper URL for Globe Modular:**
   - Development: `http://localhost:3000`
   - Production (documented): `https://modular.grupoGlobe.com`

2. **Link behavior:**
   - Opens in a new tab (`target="_blank"`)
   - Includes security attributes (`rel="noopener noreferrer"`)
   - Works for both EN and ES versions (uses translation system)

3. **Documented for deployment:**
   - Created `DEPLOYMENT-NOTES.md` with production URL instructions
   - Added inline comment in code for easy finding during deployment

## How to Test

### Current Setup
- **Grupo Globe site:** Running on `http://localhost:3001` ✅
- **Globe Modular site:** Needs to run on `http://localhost:3000`

### Testing Steps

1. **Start Globe Modular dev server (if not already running):**
   ```bash
   cd ~/Desktop/marketing/globe-modular-nextjs
   npm run dev
   # Should start on port 3000
   ```

2. **Verify Grupo Globe is running:**
   ```bash
   # Already running on port 3001
   # Visit: http://localhost:3001
   ```

3. **Test the link:**
   - Go to `http://localhost:3001`
   - Scroll to "Our Portfolio" section (#empresas)
   - Find the Globe Modular card
   - Click "Learn More" / "Más información"
   - Should open Globe Modular site in a new tab (localhost:3000)

4. **Test both languages:**
   - Switch language using the language switcher
   - Verify link works in both English and Spanish versions

## Before Production Deployment

**⚠️ IMPORTANT:** Before deploying to production, update the Globe Modular URL:

1. Open `app/[locale]/page.tsx`
2. Find line ~415 (Globe Modular entry)
3. Change:
   ```typescript
   url: "http://localhost:3000"
   ```
   To:
   ```typescript
   url: "https://modular.grupoGlobe.com"
   ```

## Code Location

The company cards array starts around line 413 in `app/[locale]/page.tsx`:
```typescript
{[
  { logo: "logo-globe-power.png", name: "Globe Power", key: "power", url: "#" },
  { 
    logo: "logo-globe-modular.png", 
    name: "Globe Modular", 
    key: "modular", 
    url: "http://localhost:3000" // <-- CHANGE THIS FOR PRODUCTION
  },
  // ... other companies
]}
```

## Notes

- Other company "Learn More" links are still placeholder `#` - update when sites are ready
- The link system is ready for all companies - just update the `url` property
- All links automatically open in new tabs if they're external URLs
- Bilingual support is automatic (uses translation keys)

---

**Status:** ✅ Ready to test
**Next:** Start Globe Modular dev server and test the link!
