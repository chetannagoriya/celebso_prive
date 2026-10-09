# CELEBSO PRIVÉ · Sovereign Capital & Discrete Fellowship Platform

A high-end, bespoke MERN stack application designed for **Celebso Privé**, mirroring luxury royal salon aesthetics with ultra-discreet protocols, dark gold styling, and responsive design.

---

## 🏛️ Project Overview

- **Design Aesthetic**: Rich obsidian black palette (`#0A0A0C`), champagne gold accents (`#C5A059`), ivory contrast cards, luxury serif typography (`Cormorant Garamond`, `Cinzel`, `Montserrat`).
- **Architecture**: Full MERN Stack (MongoDB, Express.js, React, Node.js).
- **Resilience**: The backend features dual-mode operation — it seamlessly runs with MongoDB and gracefully falls back to an in-memory session store if MongoDB isn't running locally yet.

---

## 📁 Project Structure

```
celebso prive/
├── client/                      # Frontend React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx               # Luxury header with mobile drawer
│   │   │   ├── Hero.jsx                 # Hero with royal palace backdrop & gold typography
│   │   │   ├── StatsBar.jsx             # 5 core sovereign metric badges & icons
│   │   │   ├── PalaceGathering.jsx      # Ivory card + royal dinner + timed schedule
│   │   │   ├── BespokeSalons.jsx        # 3 Salon convergence pillar cards
│   │   │   ├── DimensionsConvergence.jsx # 5 Curated disciplines vertical cards
│   │   │   ├── PrivateByDesign.jsx      # Ethos, quote & 3 numbered tenets
│   │   │   ├── PartnerSection.jsx       # 5 Institutional partner pillars & callout
│   │   │   ├── InvitationCTA.jsx        # "An Invitation, Not a Registration" CTA
│   │   │   ├── Footer.jsx               # Global chapters, links & confidentiality notice
│   │   │   ├── PetitionModal.jsx        # Multi-step VIP Petition Submission Form
│   │   │   ├── PartnerModal.jsx         # Institutional Alignment Form
│   │   │   ├── SelectionProcessModal.jsx # 4-Stage Admissions & Vetting Protocol
│   │   │   └── AdvisoryDashboard.jsx    # High Advisory Board Vetting & Dossier Console
│   │   ├── services/
│   │   │   └── api.js                   # Axios client connected to Express API
│   │   ├── App.jsx                      # Main assembly & modal state management
│   │   ├── main.jsx                     # DOM root
│   │   └── index.css                    # Luxury fonts, gold text gradients & glow
│   ├── index.html                       # Fonts & metadata
│   ├── tailwind.config.js               # Luxury palette & typography configuration
│   └── vite.config.js                   # Proxy configuration to server port 5000
│
├── server/                      # Backend Node.js + Express + Mongoose
│   ├── config/
│   │   └── db.js                        # MongoDB connection with resilient fallback
│   ├── models/
│   │   ├── Petition.js                  # VIP Petition Schema
│   │   ├── PartnerInquiry.js            # Institutional Alignment Schema
│   │   └── Salon.js                     # Salons & Palace Gathering Schema
│   ├── controllers/
│   │   ├── petitionController.js        # Petitions CRUD & dashboard stats
│   │   ├── partnerController.js         # Partner submissions
│   │   └── salonController.js           # Salons & Itinerary queries
│   ├── routes/
│   │   ├── petitionRoutes.js            # /api/invitations
│   │   ├── partnerRoutes.js             # /api/partners
│   │   └── salonRoutes.js               # /api/salons
│   ├── middleware/
│   │   └── errorHandler.js              # Centralized error handler
│   ├── seed.js                          # Database seeder script
│   ├── .env                             # Environment variables
│   └── server.js                        # Main Express app entry point
│
└── package.json                 # Root script runner
```

---

## ⚡ How to Run

### 1. Install Dependencies
```bash
# In the server folder:
cd server
npm install

# In the client folder:
cd ../client
npm install
```

### 2. Run Backend (Port 5000)
```bash
cd server
npm run dev
```

### 3. Run Frontend (Port 5173)
```bash
cd client
npm run dev
```

### 4. (Optional) Seed Database
```bash
cd server
npm run seed
```

---

## 💎 Features Included

1. **Exact UI Reproduction**:
   - Hero banner with royal palace twilight imagery and gold typography.
   - "Not Another Networking Event" stats strip with 5 luxury icons (`40 Seats`, `4+ Hours`, `Heritage Venue`, `100% Discrete`, `Global Network`).
   - "A Gathering at the Palace" split layout: Ivory card + palace banquet image + interactive timeline.
   - "Pillars of Convergence" three-card salon grid (`The Royal Banquet`, `The Roundtable`, `The Imperial Soirée`).
   - "Dimensions of Convergence" 5 vertical discipline cards (`Equestrian`, `Hospitality`, `Craftsmanship`, `Architecture`, `Stewardship`).
   - "Private by Design" section with quote and 3 numbered tenets.
   - "Partner with the Room" 5 institutional pillars and partnership CTA banner.
   - "An Invitation, Not a Registration" section with discretion clause.
   - Luxury footer with chapters (`Jaipur`, `Dubai / Abu Dhabi`, `London`, `Zurich`, `Doha`).

2. **Interactive Modals**:
   - **Multi-Step Petition Modal**: 3-step application form (Identity, Stewardship & Jurisdiction, Statement of Intent & Salons) that generates a sealed dossier reference ID.
   - **Institutional Alignment Modal**: Submit partnership proposals directly to the Patronage Council.
   - **Selection Process Modal**: Explains the 4 stages of the vetting protocol.
   - **High Advisory Board Portal**: Discrete console to review submitted dossiers, search, filter, approve/waitlist candidates, and inspect statements in real-time.
