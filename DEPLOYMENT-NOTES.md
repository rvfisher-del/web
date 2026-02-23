# Deployment Notes - Grupo Globe Site

## Company Links Configuration

### Globe Modular Link
**File:** `app/[locale]/page.tsx`

**Current (Development):**
```
url: "http://localhost:3000"
```

**Production:**
```
url: "https://modular.grupoGlobe.com"
```

**Action Required Before Production Deploy:**
1. Find the Globe Modular entry in the companies array (line ~415)
2. Update the URL from `http://localhost:3000` to `https://modular.grupoGlobe.com`
3. The link already opens in a new tab with proper security attributes

### Other Company Links
All other company "Learn More" links are currently set to `#` (placeholder). Update these with actual URLs when the sites are ready.

---

**Last Updated:** 2026-02-22
