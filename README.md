# 🎶 Music App – Micro Frontend Architecture

This project demonstrates a **Music App** built using **React, Vite, and Module Federation** with role-based authentication.

The system is split into:

* **Main App (Host)** – entry point that integrates everything.
* **Music Library (Remote / Microfrontend)** – manages songs (search, sort, group, and admin actions).

---

## 🚀 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/GurjyotSingh21/frontend-musicapp.git
cd frontend-musicapp
```

### 2. Install Dependencies

Run inside both the **main-app** and **music-library** folders:

```bash
npm install
```

### 3. Start Development Servers

* Start **music-library**:

```bash (for debugging)
cd music-library
npm run dev  
```
```bash (for accessing via main-app(host))
npm run build
npx vite preview --port 5174
```

Runs on [http://localhost:5174](http://localhost:5174)

* Start **main-app**:

```bash
cd main-app
npm run dev
```

Runs on [http://localhost:5173](http://localhost:5173)

⚡ Ensure the **music-library** is running before starting the main app.

---

## 🌐 Deployment

Both apps are deployed via **Vercel**:

* **Main App (Host):** [https://frontend-musicapp-host.vercel.app/](https://frontend-musicapp-host.vercel.app/)
* **Music Library (Remote):** [https://frontend-musicapp-656t.vercel.app/](https://frontend-musicapp-656t.vercel.app/)

---

## 🔑 Demo Credentials

* **Admin:**

  * Username: `admin`
  * Password: `admin123`

* **User:**

  * Username: `user`
  * Password: `user123`

---

## How It Works

### Micro Frontend (Module Federation)

* The `music-library` is exposed as a **remote** microfrontend.
* The `main-app` dynamically loads `remoteEntry.js` at runtime.
* This enables independent builds & deployments while still working together.

### Role-Based Authentication

* The app distinguishes between **Admin** and **User** roles.
* **Admin** users can:

  * Add new songs
  * Delete songs
* **User** role has **read-only access** to the music library.

---
