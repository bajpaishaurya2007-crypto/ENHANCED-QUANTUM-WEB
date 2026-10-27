# ⚡ REROUTER — Quantum-Integrated Urban Traffic & Smart Emergency Dispatch

**REROUTER** is a futuristic, highly animated web application visualizing quantum-integrated algorithms (QAOA and Quantum Annealing) for real-time metropolitan traffic routing, synchronized green-wave signal timing, and a **Severity-Based Emergency Routing Engine & India Emergency Helpline Directory**.

---

## 🌟 Key Features

### 1. 🚨 Severity-Based Emergency Routing Engine (NEW)
- **Multi-Modal Data Inputs:**
  - **Category:** Road Accident, Fire & Inferno, Medical Emergency, Industrial Hazard / Hazmat, Natural Calamity / Disaster, Crime / Threat.
  - **Severity Levels:**
    - **Level 1 (Low):** Minor vehicle damage, localized disturbance $\rightarrow$ Automated SMS/Push to Local Police Control Room (112/100) and Basic Life Support Ambulance (108/102).
    - **Level 2 (Moderate):** Multiple casualties, trapped victims, major arterial blockage, fire containment $\rightarrow$ Escalates to Local Police & Traffic Police, Trauma Center Emergency Hospital, and Fire & Rescue (101).
    - **Level 3 (Critical Disaster):** Mass casualty, hazmat leakage, structural collapse, multi-vehicle pileups $\rightarrow$ Simultaneous escalation to National ERSS (112), SDMA (1070) / DDMA (1077), NDRF Regional Operations, NHAI Highway Incident Helpline (1033) if on a national highway, and Apex Trauma ICU units.
  - **Geographic Context:** State, District, GPS coordinates (Lat/Lng), nearest Landmark, and National Highway toggle with Highway Number.
  - **Corridor Synchronization:** Triggering a dispatch automatically clears a quantum green-wave priority corridor on the interactive traffic map!

### 2. 🇮🇳 Pan-India Emergency Helpline Directory (NEW)
- **National Universal Helplines:**
  - Pan-India Integrated Emergency (ERSS): **112**
  - Police Control Room: **100 / 112**
  - Fire & Rescue Services: **101**
  - National Ambulance Service (EMRI): **108 / 102**
  - National Highway Incident Helpline (NHAI): **1033**
  - State Disaster Management Authority (SEOC): **1070**
  - District Disaster Management Authority (DEOC): **1077**
  - Women Helpline: **181 / 1091**
  - Childline India: **1098**
  - National Cyber Crime Reporting: **1930**
  - Railway Security & Medical Assistance: **139**
- **State & District Hierarchical Schema:**
  - Complete control room contacts for Maharashtra, Delhi NCT, Karnataka, Tamil Nadu, Telangana, Uttar Pradesh, Gujarat, West Bengal, Kerala, Rajasthan, Punjab, Haryana, Bihar, Odisha, Madhya Pradesh, Jammu & Kashmir, and more.
  - Direct one-click dialing (`tel:`) and copy clipboard actions.
  - "Dispatch Emergency in this District" shortcut that pre-populates the Incident Reporting Engine with the selected State and District.

### 3. 🔐 Clearance Onboarding & Google OAuth
- Google Sign-In with verified role profiles (*Chief Quantum Architect*, *Transit Director*, *QAOA Specialist*) or custom sign-in.
- Google Maps API key entry with persistent local storage and fallback to Native High-Resolution Vector Grid simulation.

### 4. 🌗 Dual-Theme Architecture
- **Quantum Dark Mode (Default):** Deep slate `#0B0F19`, glowing cyan `#00F2FE`, purple `#7F00FF`, and emerald `#00FF87`.
- **Smart City Light Mode:** Crisp `#F8FAFC`, vibrant royal blues, soft glass gradients, and dark high-contrast typography.

### 5. ⚛️ Animated Quantum Traffic Impact Core & Live Map
- Interactive central processor hub with rotating qubit registers and pulse injection.
- Real-time metropolitan grid with animated vehicle streams, synchronized traffic lights showing propagating green waves, and live bypass arcs around incidents.

---

## 🚀 Quickstart Guide

### Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
├── index.html                   # HTML entry with Google fonts & metadata
├── vite.config.js               # Vite bundler configuration & alias
├── tailwind.config.js           # Custom themes, colors, and neon animations
├── postcss.config.js            # PostCSS plugin setup
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main application wrapper
    ├── context/
    │   ├── ThemeContext.jsx     # Dark Quantum vs Smart City Light state
    │   └── AuthContext.jsx      # Google OAuth & Google Maps API key state
    ├── data/
    │   └── emergencyDirectory.js# National helplines & State/District schema
    ├── services/
    │   └── escalationEngine.js  # Smart severity-based routing & SMS generator
    ├── components/
    │   ├── Navbar.jsx           # Header, SOS report trigger, directory link
    │   ├── IncidentReportingModal.jsx # Severity-based reporting & dispatch modal
    │   ├── EmergencyDirectory.jsx     # India State-Wise Helpline Directory
    │   ├── InteractiveMap.jsx   # Live traffic simulation & green wave engine
    │   ├── QuantumCore.jsx      # Animated processor hub & 4 live metric widgets
    │   ├── WorkflowSteps.jsx    # 5-step quantum pipeline interactive cards
    │   ├── AuthModal.jsx        # Google login & Maps API configuration modal
    │   └── Footer.jsx           # System diagnostics & telemetry footer
    └── styles/
        └── globals.css          # Glassmorphism, neon glows, flow animations
```
