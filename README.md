# MausamSeva (मौसम सेवा / Mausam 2.0)

> **Smart India Hackathon 2024–2026 — Problem Statement SIH26076**  
> **Development of Personalized Homepage for 'Mausam' Mobile Application**  
> **Ministry of Earth Sciences (MoES) / India Meteorological Department (IMD)**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Web Speech API](https://img.shields.io/badge/Web_Speech_API-Bilingual-orange)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌟 Executive Summary

**MausamSeva (मौसम सेवा)** transforms India's meteorological engagement from a static, one-size-fits-all weather report into an **AI-driven, age-inclusive (Ages 10 to 80+), hyper-personalized climate dashboard**. 

Designed under **SIH26076** for the **Ministry of Earth Sciences (MoES)** and **India Meteorological Department (IMD)**, MausamSeva seamlessly bridges citizen-centric micro-nowcasting with macro-economic inter-ministerial forecasting (FCI, CEA, ICMR, NDMA).

---

## 🚀 Key Architectural Innovations

### 1. 👥 8 Dynamic Citizen Personas (Ages 10 to 80+)
* 🎒 **Student & Youth (10–18 Yrs):** School bus transit lightning distance, rain gear checks, sports ground UV index & hydration advisory.
* 🌾 **Kisan / Farmer (25–70+ Yrs):** Topsoil moisture (0-15cm), Meghdoot agro-bulletin, pesticide wash-off risk windows, and mandi produce protection.
* 👵 **Senior & Health (60–80+ Yrs):** AQI fine particulate inversion, humidity-induced joint pain alerts, wet-bulb heat index, and 1-tap Senior Care 14567 helpline.
* 🚗 **Daily Commuter (18–60 Yrs):** Underpass waterlogging sensor depths, fog/smog visual range, and bus/metro delay risk.
* 🏃 **Fitness & Athlete (16–50 Yrs):** Aerobic running windows, ground-level ozone (O3), and sweat electrolyte loss rates.
* ⛵ **Coastal & Fisherfolk (20–65 Yrs):** Astronomical spring tide peaks, 4.2m wave swells, Beaufort squall scales, and INCOIS Port Cautionary Signals.
* ✈️ **Traveler & Tourist (All Ages):** Himalayan landslide slope stability, CAT-III airport fog delays, and clothing insulation (Clo) index.
* 🎪 **Event & Family (All Ages):** 1-km micro rain probability curves, open-air wedding lawn risks, and canopy wind-shear thresholds.

---

### 2. 🤖 MAUSAM PRISM AI — Complete Multilingual Voice Assistant
* **Bidirectional Text & Voice Interaction:**
  * User speaks in their preferred language ➔ Real-time STT ➔ Automatic Language & Hinglish Detection ➔ Intent Processing ➔ Native Language Generation ➔ TTS Synthesis ➔ Assistant speaks back naturally in that language!
* **Primary Languages:** **Hindi (हिन्दी)** and **Indian English**.
* **Special Hinglish & Code-Mixed Support:** Understands Roman Hindi (*"Kal Lucknow mein baarish hogi kya?"*) and speaks back natural Hinglish responses.
* **All 22 Scheduled Languages of India Supported:**
  * Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santali, Sindhi, Tamil, Telugu, Urdu.
  * Real-time capability indicators for every language: `✓ Full Text + Voice`, `✓ Voice Input Only`, `✓ Text Only`, `⚠ Limited`.
* **Dual Operational Modes:**
  * **Mode 1 (Push-To-Talk):** Tap mic ➔ speak ➔ receive spoken response.
  * **Mode 2 (Conversation Mode):** Continuous hands-free loop with auto-re-listening and silence watchdog.
* **Audio Controls:** ▶ Play, ⏸ Pause, ⏹ Stop, 🔄 Replay, and speech speed adjustment (Slow, Normal, Fast).
* **Location-Based Language Hierarchy:** Recommends regional languages and local dialects based on active district/state.

---

### 3. 🚦 5-Color Threat Indicator & Weather Notice Board
* 🟢 **Green (Normal / सामान्य):** Calm, seasonal conditions.
* 🟡 **Yellow (Watch / सतर्क रहें):** Deteriorating weather; stay updated.
* 🟠 **Orange (Alert / तैयार रहें):** High risk of disruptive weather (squalls, waterlogging).
* 🔴 **Red (Warning / तुरंत कार्रवाई करें):** Severe threat to life & property; NDMA emergency protocols active.
* 🟣 **Purple (Catastrophic / Worst Mausam):** Extreme disaster tier (super cyclone, massive cloudburst).
* **Controlled Live by MoES:** Government officials broadcast the threat tier in real-time, instantaneously updating all citizen apps and the dedicated Notice Board column.

---

### 4. 🏛️ Dual Role Authentication & Strict Data Isolation
* **Citizen Mode:**
  * Friendly, cheerful interface with 1-tap Guest Entry.
  * **Strict Data Privacy:** Citizens **never see any MoES backend data, economic forecast models, CAP dispatchers, or administrative switches**.
* **MoES Executive Command Mode:**
  * Professional dark navy & gold theme for scientists and disaster management officers.
  * Authenticates via MoES/IMD employee credentials.
  * Grants dual privilege: access to the **MoES Command Center** as well as live preview of the **Citizen View**.

---

### 5. 📊 MoES Command Center & "The Data" Telemetry Portal
* **Live Ingested Persona Telemetry (`ACTUAL_PERSONA_ENTRIES`):**
  * Real-time stream of citizen queries, sensor payloads, and ground-truth reports.
  * Filters by persona, district, keyword, and exportable to CSV / raw JSON (`GET /api/v1/moes/telemetry/persona-entries`).
* **Inter-Ministerial Supply Chain Forecasting:**
  * **FCI / Agriculture:** 3-6 week forward crop yield shock models and early MSP buffer allocation.
  * **CEA / Power Grid:** Cooling Degree Days (CDD) and peak MW electricity surge predictions.
  * **ICMR / Health:** Respiratory ER admission surges and district hospital nebulizer pre-stocking.
  * **MoRTH / Traffic Police:** Geofenced underpass waterlogging alerts and pump triggers.
  * **INCOIS / Coast Guard:** Coastal port signal hoisting and offshore rescue vectors.
* **DPDP Act 2023 Compliance:** 500-meter spatial centroid hashing with strict Zero-PII storage.

---

### 6. 🧭 Clean 3-Dots Drawer Architecture
Instead of dumping dozens of widgets onto a single page, the entire platform is organized cleanly:
* **Top Header:** Brand, active city GPS selector, live threat level pill, MAUSAM PRISM AI launcher, and the **3-Dots Menu Button (`⋮`)**.
* **3-Dots Executive Drawer (`NavigationMenuDrawer.jsx`):** Houses the user session, logout, Notice Board, Unified Safety Hub (Damini + Meghdoot + Doppler Radar), 7-Day Synoptic Outlook, Crowdsource Verification, MoES Command, and National Emergency Helplines (1078, 1800-180-1551, 14567, 108).

---

## 🛠️ Technology Stack

* **Frontend Framework:** React 18 with Vite
* **Styling:** Tailwind CSS with custom government palette & dark mode
* **Speech Processing:** Web Speech API (`SpeechRecognition` & `SpeechSynthesis`)
* **Icons:** Lucide React
* **State Management:** React Hooks & Local Storage
* **Data Standards:** ISO 639-1, BCP47, DPDP Act 2023 spatial hashing

---

## 💻 Local Development Setup

```bash
# 1. Clone repository
git clone https://github.com/raiadarsh0510/mausam-seva.git
cd mausam-seva

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
# App will run on http://localhost:3000/

# 4. Production Build
npm run build
npm run preview
```

---

## 👥 Demo Credentials

* **Citizen Access:** Tap *"नागरिक के रूप में जारी रखें (Guest Entry)"* — Zero login required.
* **MoES Admin Access:**
  * Portal: Select *"MoES / IMD अधिकारी लॉगिन"*
  * Officer ID: `moes.admin@imd.gov.in`
  * Passcode: `Mausam@2026`
  * Or click **"डेमो क्रेडेंशियल्स भरें (Fill Demo Credentials)"** for instant 1-click access.

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
