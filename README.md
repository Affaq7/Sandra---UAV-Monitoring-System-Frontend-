# 🛸 Sandra — UAV Monitoring System (Frontend)

> A futuristic, real-time UAV Command Center built with React, TypeScript & Vite.

---

## 📖 About the Project

**Sandra** is a sleek, dark-themed UAV (Unmanned Aerial Vehicle) monitoring and command interface designed to give operators full situational awareness of drone fleets in real time. The dashboard provides live telemetry data, interactive map views, camera feeds, alert management, and mission control — all wrapped in a neon-lit, glassmorphism UI inspired by modern aerospace HUDs.

> 💡 I made this frontend project for my **AHCI (Advanced Human-Computer Interaction) course in 6th semester** along with my amazing group mates **Amna** and **Kissa**.

---

## ✨ Features

- 🗺️ **Live Map View** — Interactive map with real-time UAV position tracking
- 📡 **Telemetry Dashboard** — Battery level, altitude, speed, signal strength & GPS coordinates
- 📷 **UAV Camera Preview** — Live drone camera feed panel
- 🚨 **Alert System** — Real-time alert notifications with color-coded severity levels
- 🔒 **Secure Login Screen** — PIN/credential-based login with Enter-key support
- 🌐 **Persistent Navigation** — Session state preserved across page refreshes
- 🎨 **Neon HUD Aesthetic** — Glowing borders, dark mode, smooth animations & glassmorphism design

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + Custom CSS (HUD/Neon Theme) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| **Routing** | [React Router DOM v6](https://reactrouter.com/) |
| **Data Fetching** | [TanStack Query (React Query)](https://tanstack.com/query) |
| **Charts** | [Recharts](https://recharts.org/) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) |
| **Testing** | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `bun`

### Installation

```bash
# Clone the repository
git clone https://github.com/Affaq7/Sandra---UAV-Monitoring-System-Frontend-.git

# Navigate into the project
cd Sandra---UAV-Monitoring-System-Frontend-

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:8080` (or the next available port).

### Building for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

---

## 📁 Project Structure

```
Sandra - UAV Monitoring System/
├── public/
│   ├── uav.html          # Core UAV dashboard (single-file HUD)
│   ├── holo/             # Holographic UI assets
│   └── logo.png          # Sandra branding logo
├── src/
│   ├── components/       # Reusable React components
│   │   └── ui/           # shadcn/ui component library
│   ├── pages/            # Application pages (Index, NotFound)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Root application component
│   └── main.tsx          # Entry point
├── package.json
├── vite.config.ts
└── tailwind.config.ts
```

---

## 👥 Team

| Name | Role |
|---|---|
| **Affaq** | Frontend Development, UI/UX Design |
| **Amna** | UI/UX Collaboration, Feature Design |
| **Kissa** | UI/UX Collaboration, Feature Design |

---

## 🎓 Academic Context

This project was developed as part of the **AHCI (Advanced Human-Computer Interaction)** course in **6th Semester**. The goal was to apply HCI principles to design an intuitive, user-friendly interface for complex drone monitoring operations — focusing on information hierarchy, real-time feedback, and operator situational awareness.

---

## 📄 License

This project is for academic and demonstration purposes.

---

<div align="center">
  <sub>Built with ❤️ by Affaq, Amna & Kissa — AHCI 6th Semester</sub>
</div>
