# Diabetes Feast — Website Deployment

One-page marketing site for [diabetesfeast.jp](https://www.diabetesfeast.jp).

## File structure

```
deploy/
├── index.html              ← Entry point (single page)
├── tweaks-panel.jsx        ← In-page design Tweaks panel
├── styles.css              ← Global CSS (imports tokens/)
├── tokens/
│   ├── colors.css
│   ├── typography.css
│   ├── spacing.css
│   ├── radius.css
│   └── shadows.css
└── uploads/
    ├── DashboardAfterDismissGS.png
    ├── GlucoseCurve.png
    └── WhatIfBdayCake .png
```

**External dependencies** (loaded from CDN — requires internet):
- React 18.3.1 (unpkg.com)
- Babel Standalone 7.29.0 (unpkg.com)
- Inter font (fonts.googleapis.com)

---

## DigitalOcean deployment options

### App Platform (easiest, no server config)

1. Push the `deploy/` folder contents to a GitHub repo (e.g. `diabetesfeast-website`)
2. In DigitalOcean → **App Platform** → Create App
3. Select your GitHub repo, set **output directory** to `/` (root)
4. Set build type to **Static Site**
5. Deploy — DigitalOcean handles CDN + HTTPS automatically

---

## When the App Store link is ready

In `index.html`, find the waitlist form and replace it with:

```jsx
<a href="https://apps.apple.com/app/diabetes-feast/idXXXXXXXXX"
   style={{display:'inline-flex',alignItems:'center',gap:8,height:50,padding:'0 26px',
           borderRadius:99,background:th.accent,color:'#fff',
           fontSize:15,fontWeight:600,textDecoration:'none'}}>
  Download on the App Store
</a>
```

---

