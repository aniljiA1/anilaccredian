# 🚀 Accredian Clone

A modern **Accredian-like lead management and referral system clone** built using **Next.js 16 (App Router)**, **TypeScript**, **Zustand**, and API routes.  
This project demonstrates full-stack development concepts including state management, API handling, and production build optimization.

---

## ✨ Features

- 📩 Lead submission form
- 🧠 Global state management using Zustand
- ⚡ Next.js API routes (`/api/leads`) 
- 📦 Optimized production build
- 🎯 TypeScript support
- 💾 In-memory lead storage (can be extended to DB)
- 📱 Responsive UI

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **State Management:** Zustand
- **Backend:** Next.js API Routes
- **Styling:** CSS / Tailwind (if used)
- **Build Tool:** Next.js TurboPack

---

## 📂 Project Structure

accredian-clone/
│
├── app/ # Next.js app directory
│ ├── api/leads/ # API route for leads
│ ├── page.tsx # Home page
│
├── store/ # Zustand store
│ └── useStore.ts
│
├── utils/ # API helpers
│ └── submitLead.ts
│
├── components/ # UI components
│
├── public/
├── styles/
└── package.json


---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/aniljiA1/anilaccredian.git
cd accredian-clone

---

2. Install dependencies
npm install

---

3. Run development server
npm run dev

---

4. Build for production
npm run build

---

5. Start production server
npm start

---

📡 API Endpoint
POST /api/leads
https://anilaccredian.vercel.app/api/leads
---
Add a new lead

Request Body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}

Response:

{
  "success": true,
  "data": { ...lead }
}

#localcalhost:
http://localhost:3004/
---

check API:

http://localhost:3004/api/leads

---

🧠 State Management (Zustand)
leads: Lead[]
addLead: (lead: Lead) => void
setLeads: (leads: Lead[]) => void


---


📈 Future Improvements
🗄️ Add MongoDB / Prisma database
🔐 Authentication system
📊 Admin dashboard
📧 Email notifications

---

🌐 Deploy on Vercel

Live Demo: https://anilaccredian.vercel.app

---

👨‍💻 Author

Anil Kumar
💼 Full Stack Developer


