# SuperDruzyna

A one-page site for a dog trainer, built as a small full-stack project: a colorful,
photo-rich single page (Hero, About, Services, Testimonials, Contact) backed by a real API.

## Stack

- **Frontend** — React + Vite, plain CSS (no component library)
- **Backend** — Node + Express
- **Database** — MongoDB Atlas (via Mongoose)
- **Email** — Resend, for new inquiry notifications

## Project structure

```
SuperDruzyna/
├── frontend/   the one-page site
└── backend/    Express API (services, testimonials, inquiries)
```

## Getting started

```bash
# frontend
cd frontend
npm install
npm run dev

# backend (separate terminal)
cd backend
npm install
cp .env.example .env   # then fill in MONGODB_URI, RESEND_API_KEY, NOTIFICATION_EMAIL
npm run dev
```
