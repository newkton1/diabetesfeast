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

### Option A — App Platform (easiest, no server config)

1. Push the `deploy/` folder contents to a GitHub repo (e.g. `diabetesfeast-website`)
2. In DigitalOcean → **App Platform** → Create App
3. Select your GitHub repo, set **output directory** to `/` (root)
4. Set build type to **Static Site**
5. Deploy — DigitalOcean handles CDN + HTTPS automatically

### Option B — Droplet with Nginx

SSH into your droplet, then:

```bash
# Install Nginx
sudo apt update && sudo apt install nginx -y

# Copy files to web root
sudo mkdir -p /var/www/diabetesfeast
sudo cp -r deploy/* /var/www/diabetesfeast/

# Create Nginx config
sudo nano /etc/nginx/sites-available/diabetesfeast
```

Paste this config:

```nginx
server {
    listen 80;
    server_name diabetesfeast.jp www.diabetesfeast.jp;
    root /var/www/diabetesfeast;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Serve .jsx files as JavaScript
    location ~* \.jsx$ {
        add_header Content-Type text/javascript;
    }

    # Cache static assets
    location ~* \.(css|png|jpg|jpeg|gif|svg|ico|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

```bash
# Enable site and reload
sudo ln -s /etc/nginx/sites-available/diabetesfeast /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# Add HTTPS with Certbot
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d diabetesfeast.jp -d www.diabetesfeast.jp
```

### Option C — Spaces (object storage + CDN)

1. Create a **Space** in your nearest region
2. Enable **CDN** on the Space
3. Upload all files from `deploy/` preserving folder structure
4. Set `index.html` as the index document
5. Point your domain CNAME to the Space CDN endpoint

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

## Contact

Robert Hancock · roberthancock@diabetesfeast.jp · www.diabetesfeast.jp
