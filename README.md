# LinkDrop.io 🚀

<div align="center">

  ### 🌐 The Operating System for Your Social Life
  **Fast, frictionless event planning, instant expense splitting, and collaborative itineraries.**

  <p align="center">
    <a href="https://linkdrop.web.app/"><img src="https://img.shields.io/badge/Live_Site-linkdrop.web.app-4285F4?style=for-the-badge&logo=firebase&logoColor=white" alt="Live Website" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 18" /></a>
    <a href="https://firebase.google.com/"><img src="https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase Firestore" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge" alt="MIT License" /></a>
  </p>

  <p align="center">
    <b>No downloads. No mandatory sign-ups. Create a drop, share the link, and coordinate effortlessly.</b>
  </p>

</div>

---

## 💡 Why LinkDrop?

Group chats are great for talking, but terrible for planning. Important details get lost across 500 messages, expense math causes friction, and finding addresses or arrival times is a chore.

**LinkDrop** solves this with single-link event cards ("Drops") that combine everything your group needs into one living, real-time board:
- 💸 **Instant Bill Splitting**: Add costs as you go. LinkDrop calculates balances and tells everyone who owes whom.
- 🕒 **Dynamic Itinerary Timelines**: Clear schedule of events with timestamps and locations.
- 👥 **Guest Lists & RSVPs**: Track headcount and dietary preferences in real-time.
- 🗳️ **Group Polls**: Fast consensus voting on locations, dates, and activities.
- 📝 **Markdown Notes & Checklists**: Packing lists, directions, and essential links.

---

## ✨ Core Features

### 1. 💸 Automated Expense Splitting
Forget awkward spreadsheets. Enter group expenses with payers and split participants. LinkDrop computes minimal transaction debt graphs and displays exactly who pays who with zero math needed.

### 2. 📅 Real-Time Collaborative Itinerary
Build dynamic schedules for road trips, weekend getaways, conferences, or dinner hangouts. Changes synchronize immediately across all participants.

### 3. ☁️ Firebase Cloud Firestore Sync
Powered by **Google Cloud Firestore**, every Drop supports live document snapshots (`onSnapshot`). When an attendee checks off a task, votes in a poll, or updates an expense, every open screen updates automatically without reloading.

### 4. 🔒 Privacy-First Architecture
- **Offline-First Storage**: Drops are cached locally in your browser's `localStorage`.
- **Zero Account Wall**: Open the site, create a plan, and share it instantly via `?id=<drop-id>`.
- **No Telemetry Clutter**: Only the event creator and whoever receives the link can view or update the drop.

### 5. 🎨 Dark Mode & Adaptive Themes
Includes 5 built-in themes (*Default Indigo*, *Warm Sunset*, *Cyber Blue*, *Emerald Forest*, and *Neon Purple*) with automatic system dark mode detection and manual toggle.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Core**: React 18 (Hooks, Suspense, State Reducers), Modern ES Modules
- **Design & Styling**: Tailwind CSS, Inter typography, custom glassmorphism panels, CSS keyframe entrance animations
- **Icons**: Lucide Icons
- **Backend & Cloud**:
  - **Firebase Firestore**: Real-time NoSQL cloud database for drop documents
  - **Firebase Hosting**: High-speed global CDN edge hosting
  - **Firebase Analytics**: Aggregated usage telemetry
- **Bundler & Tooling**: Vite 5

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Amrit-droid-og/LinkDrop.git
cd LinkDrop
```

### 2. Run Local Preview
You can run the application immediately with Node:
```bash
npm run preview
# or
npx serve dist
```
Navigate to `http://localhost:3000` to interact with LinkDrop locally.

---

## ☁️ Firebase Deployment

This project is pre-configured with `firebase.json` and `.firebaserc` targeting the active Firebase project `linkdrop-17934`.

To deploy updates to the live site at [linkdrop.web.app](https://linkdrop.web.app):

```bash
# 1. Login to Firebase CLI
firebase login

# 2. Deploy directly to Firebase Hosting
firebase deploy --only hosting
```

---

## 📁 Project Structure

```
linkdrop/
├── dist/                     # Recovered & optimized client production bundle
│   ├── index.html            # Single Page Application root HTML
│   ├── vite.svg              # Favicon asset
│   └── assets/               # Bundled JavaScript & CSS
│       ├── index-hRi-gRDO.js # React 18, Firebase SDK & App logic
│       └── index-D4SVfGhA.css# Tailwind CSS design system
├── src/
│   ├── firebase.js           # Firebase app & Firestore initialization
│   └── constants.js          # Module definitions, starter templates & themes
├── firebase.json             # Firebase Hosting rewrite rules
├── .firebaserc               # Firebase project binding (linkdrop-17934)
├── package.json              # NPM metadata & run scripts
└── README.md                 # Project documentation
```

---

## 🤝 Contributing

Contributions and feedback are welcome!
1. Fork this repository
2. Create your feature branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'feat: Add NewFeature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for details.

---

<div align="center">
  <sub>Crafted with ❤️ by <a href="https://github.com/Amrit-droid-og">Amrit</a> • Creator of <a href="https://linkdrop.web.app/">LinkDrop.io</a></sub>
</div>
