# Nile University Competitive Programming

A web platform designed to encourage Nile University students to practice problem-solving and participate in programming contests.

---

## 🛠️ Tech Stack

* **Node.js** – Backend server
* **Supabase** – Authentication & database
* **React** – Frontend framework
* **Vite** – Development & build tool
* **Tailwind CSS** – Styling
* **ZeroJudge** – Code execution and testing API

---

## 📁 Folder Structure

```
.
├── DB_Backend
│   ├── icpcbackend
│   ├── config
│   └── .env.example
└── DBfront
    └── src
```

---

## ⚙️ Setup Instructions

1. Copy the example environment file and fill in your values:

   ```bash
   cp .env.example .env
   ```

2. Edit `.env`:

   ```env
   PORT=3000
   SUPABASE_URL=
   SUPABASE_KEY=
   JUDGE0_URL=http://localhost:2358
   ENABLE_ALL_LANGUAGES=true
   ```

---

## 🚀 Running the Project

### Frontend

```bash
cd DBfront
npm run dev
```

### Backend

```bash
cd DB_Backend
node index.js
```
