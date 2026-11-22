# Riitu Institution — CA Academy Official Web Platform

> Premier Chartered Accountancy & Commerce Coaching Academy located in Sector 12 Kharghar, Navi Mumbai. Featuring exclusive 15-student micro cohorts mentored 100% by practicing Fellow Chartered Accountants (Ex-PwC, Deloitte, Disney).

---

## 🌟 Key Features & Architecture

- **React 19 & Vite 8**: Ultra-fast hot module replacement and production bundling.
- **Tailwind CSS Modern Styling**: Bespoke typography (Playfair Display & Inter/Plus Jakarta Sans), 2px–4px architectural geometry, high-contrast dark green & gold palette.
- **Mobile First & Responsive**: Optimized for 360px, 375px, 390px, and tablet viewports with a 1-tap sticky conversion bottom bar (Call CA, WhatsApp, Free Demo).
- **Comprehensive SEO & AEO**: Full Rank Math compliance, H1/H2/H3 semantic hierarchy, Table of Contents jump links, 4+ visual media elements per route with descriptive alt tags.
- **Schema.org Structured Data**: Multi-entity `@graph` JSON-LD including `EducationalOrganization`, `LocalBusiness`, `Course`, `FAQPage`, `BreadcrumbList`, and `Person`.
- **Search Engine Crawling**: Production `robots.txt`, `sitemap.xml`, and Microsoft Bing / Yandex **IndexNow** protocol verification (`e7c8b415a9d643878b209d012e564f92.txt`).

---

## 🚀 How to Deploy to Hostinger

There are 3 easy ways to deploy this repository to your Hostinger website:

### Option 1: Hostinger Git Deployment (Recommended & Automatic)
1. Log in to your **Hostinger hPanel**.
2. Navigate to **Websites** → Select your domain → Scroll down to **Advanced** → **Git**.
3. Fill in the deployment details:
   - **Repository**: `https://github.com/mhaskeprasad44/Riitu.git`
   - **Branch**: `production-dist` *(This branch contains the pre-compiled static files generated automatically by GitHub Actions on every push)*
   - **Install Directory**: `public_html`
4. Click **Create** / **Deploy**.
5. Enable **Auto-Deployment** via the Hostinger Webhook URL:
   - Copy the Webhook URL provided by Hostinger.
   - Go to your GitHub repository: **Settings** → **Webhooks** → **Add Webhook**.
   - Paste the URL and select `Just the push event`.
   - Now, whenever you push code, GitHub builds the website and Hostinger automatically pulls it live!

---

### Option 2: Hostinger File Manager / ZIP Upload (Manual & Instant)
1. In this repository, click the **Actions** tab on GitHub.
2. Select the latest successful workflow run for **Build & Production Deployment**.
3. Under **Artifacts**, download `hostinger-public-html.zip`.
4. Open **Hostinger hPanel** → **File Manager** → navigate to `public_html/`.
5. Upload the ZIP file and extract its contents directly into `public_html/` (ensure `index.html` and `.htaccess` are directly in `public_html/`).

---

### Option 3: Automated GitHub Actions FTP Deployment (Zero Click)
If you want GitHub to automatically upload files to Hostinger via FTP on every push:
1. In **Hostinger hPanel**, find your **FTP Details** under **Files** → **FTP Accounts**.
2. In your GitHub repository, go to **Settings** → **Secrets and variables** → **Actions**.
3. Add these 3 Repository Secrets:
   - `HOSTINGER_FTP_SERVER` (e.g., `ftp.yourdomain.com` or Hostinger IP)
   - `HOSTINGER_FTP_USERNAME` (your Hostinger FTP username)
   - `HOSTINGER_FTP_PASSWORD` (your Hostinger FTP password)
4. Push to `main`, and the GitHub Action will automatically sync to Hostinger's `public_html/`.

---

## ⚙️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Lint verification (0 errors / 0 warnings)
npm run lint

# 4. Production build
npm run build
```

---

## 📍 Contact & Institution Details
- **Address**: Shop No. 13 & 14, Landmark CHS, Plot No. 22/23, Sector 12, Kharghar, Navi Mumbai 410210
- **Phone**: +91-9512112938 / +91-9512129471
- **Email**: enquiry@riituinstitution.com
- **Transit**: 2 Minutes Walk from Central Park Metro Station Gate 2
