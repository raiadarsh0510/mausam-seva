# KarigarSetu (कारीगर सेतु)
> **Lucknow’s Hyper-Local, Fair-Trade Craft Provenance & Direct Sourcing Network**

A mobile-first, bilingual provenance and fair-trade platform connecting grassroots Chikankari, Zardozi, and Attar artisans in Old Lucknow (Chowk, Aminabad, Nakhas, Kakori) directly with verified fabric suppliers, global boutiques, and conscious consumers.

---

## 🎨 Visual Design System
- **Base Canvas:** Soft unbleached Mulmul Ivory & Cream (`#FAF7F2`, `#FFFDF9`)
- **Royal Awadhi Court Emerald:** (`#0F382A`, `#18543F`)
- **Awadhi Gold & Ochre:** (`#C5A880`, `#C59A2C`)
- **Accessibility:** Minimum 48px touch targets, bilingual interface (English & Hindi).

---

## 🌟 Core Features

1. **Dual-Role Navigation:**
   - **Browse as Boutique / Buyer Mode:** Traceable e-commerce catalog, Awadh stitch filter chips, "Verify Authenticity" product modals, and Custom Production Batch Booking.
   - **कारीगर मोड (Artisan Mode):** Mobile-first high-touch interface with large tap targets, digital earnings khata, instant UPI payouts, and group raw material procurement.
   - **Kendra Admin Portal:** Real data onboarding for artisans and finished garments, photo upload, GI certificate generation, and JSON export/import.

2. **Voice-Assisted Listing ("बोल कर उत्पाद जोड़ें"):**
   - Tap-to-speak modal with a pulsing microphone state in Awadhi/Hindi that automatically populates draft listings.

3. **CraftDNA™ Physical-Digital Provenance:**
   - Tamper-proof NFC/QR tag lookup (`#LKO-CHK-8841`, etc.) displaying authentic artisan voice greetings, hours worked, and verifiable GI Registry #119 certificates.

4. **Sliding Fair-Price Calculator:**
   - Interactive price slider from ₹1,500 to ₹15,000 displaying the dynamic fair-trade allocation:
     - **65% Direct Artisan Share** (credited to Jan Dhan account via UPI)
     - **20% Mill Materials**
     - **10% Logistics & Nodal Kendra QC**
     - **5% Platform Fund**
     - Compared against the **70–80% traditional middleman cartel markup**.

5. **In-App Real Data Onboarding & Persistent Storage:**
   - Built-in admin form to enroll real artisans with photos, UPI IDs, and voice notes.
   - Issue CraftDNA tags with live photo uploads.
   - Persists data in `localStorage` across page refreshes, with one-click JSON backup export & restore.

---

## 🚀 One-Click Deployment Guide

### Option 1: Deploy to Vercel (Recommended — 2 Minutes)

#### Method A: Via Vercel Web Dashboard (Easiest)
1. Push this repository to your **GitHub** (see Git Push steps below).
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and select your GitHub repository.
4. Vercel automatically detects Vite:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"** — your live URL will be ready instantly!

#### Method B: Via Terminal CLI
```bash
npx vercel
```

---

### Option 2: Deploy to Render (Static Site)
1. Go to [render.com](https://render.com) and click **"New +" -> "Static Site"**.
2. Connect your GitHub repository.
3. Set the following build settings:
   - **Name:** `karigarsetu`
   - **Branch:** `main`
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. Click **"Create Static Site"**.

---

## 💻 Local Development Setup

```bash
# 1. Clone repository
git clone <your-repo-url>
cd Antigravity

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Or build and preview production bundle
npm run build
npm run preview
```

---

## 📦 Pushing to Your GitHub Repository

Run the following commands in your terminal:

```bash
git init
git add .
git commit -m "Initial commit: KarigarSetu fair-trade provenance network with real data admin portal"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/karigarsetu.git
git push -u origin main
```

---

## 📜 Compliance & Accreditations
- **Geographical Indication:** Lucknow Chikankari GI Registration #119 (GI Act 1999).
- **Network Interoperability:** ONDC (Open Network for Digital Commerce) Seller Protocol compliant.
- **Banking Layer:** Jan Dhan Aadhaar Mobile (JAM) direct benefit transfer rails.
