# React Chat App 💬

A **real-time chat application** built with **React, Vite, TailwindCSS, Socket.IO, Express.js, and MongoDB**.
The project is structured with separate **frontend** and **backend** folders for clean development and deployment.

---

## 🚀 Features

* 🔐 **Authentication** (JWT, bcrypt)
* 👤 **User registration & login**
* 💬 **Real-time messaging** (Socket.IO)
* 🗂️ **MongoDB database integration (via Mongoose)**
* 🎨 **Modern UI with TailwindCSS & Radix UI**
* 📱 **Responsive design**
* ⚡ **Fast development with Vite & React 19**
* 🛡️ **CORS & secure API endpoints**
* 🧪 **API testing with Postman**

---

## 🛠️ Tech Stack

### Frontend

* React 19, Vite, TypeScript
* TailwindCSS, Radix UI, Lucide Icons
* React Router v7
* Socket.IO Client
* Axios
* Lottie React
* Utility: clsx, class-variance-authority, tailwind-merge

### Backend

* Node.js, Express.js
* MongoDB with Mongoose
* Socket.IO (WebSocket)
* JWT (jsonwebtoken), bcrypt
* dotenv, CORS, body-parser
* Dev: nodemon

---


## 📂 Project Structure

```plaintext
react-chat-app/
├─ frontend/                # React + Vite + TailwindCSS client
│  ├─ src/
│  ├─ index.html
│  ├─ package.json
│  └─ ...
└─ backend/                 # Express + MongoDB + Socket.IO server
   ├─ index.js              # Your server entry (example)
   ├─ package.json
   ├─ .env                  # Environment variables (see below)
   └─ ...
```

---

## ✅ Prerequisites

* **Node.js** (LTS recommended)
* **MongoDB**:

  * Local MongoDB instance **or**
  * MongoDB Atlas connection string
* **Postman** (optional, for API testing)

---

## ⚙️ Installation

### 1) Clone the repository

```bash
git clone https://github.com/serhatbarisaydin/react-chat-app.git
cd react-chat-app
```

### 2) Install dependencies

**Frontend**

```bash
cd frontend
npm install
```

**Backend**

```bash
cd ../backend
npm install
```

---

## 🔐 Environment Variables (Backend)

Create a `.env` file inside the **backend** folder:

```env
MONGO_URI= "mongodb://localhost:27017/<yourProjectName>"
JWT_SECRET=your_jwt_secret
PORT=8000
```

* `MONGO_URI`: Your MongoDB connection string (local or Atlas)
* `JWT_SECRET`: Any strong secret string
* `PORT`: Backend port (defaults to 5000 in examples)

---

## ▶️ Running the Project

### Start Backend (API + WebSocket)

```bash
cd backend
npm start
```

> Ensure your `start` script runs your server entry (e.g., `nodemon index.js`).

### Start Frontend (Vite dev server)

```bash
cd frontend
npm run dev
```

* Frontend: `http://localhost:5173`
* Backend (example): `http://localhost:5000`

---

## 🗄️ Database

* User data is stored in **MongoDB** using **Mongoose** ODM.
* Auth flows (register/login) interact with MongoDB collections.
* Configure your MongoDB connection in the backend via `.env`.

---

## 🧪 API Testing (Postman)

The backend endpoints were tested with **Postman**.

### API Endpoints

* `POST /api/auth/register` → Register a new user  
* `POST /api/auth/login` → Login & receive JWT  

* `POST /api/users/create` → Create a new user (protected)  
* `GET /api/users/getAllUsers` → Fetch all users (protected)  
* `DELETE /api/users/delete/:id` → Delete user by ID (protected)  
* `PUT /api/users/update/:id` → Update user by ID (protected)  

> Include `Authorization: Bearer <token>` header for all protected routes.


---

## 🔌 Real-time (Socket.IO)

**Client (example):**

```ts
import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  withCredentials: true,
  transports: ["websocket"],
});

socket.on("connect", () => {
  console.log("connected", socket.id);
});

socket.on("message", (msg) => {
  // handle incoming chat message
});
```

**Server (example idea):**

```js
io.on("connection", (socket) => {
  socket.on("message", (payload) => {
    // persist to DB, then emit to room/users
    io.emit("message", payload);
  });
});
```

---

## 🧰 Scripts

### Frontend

* `npm run dev` → Start Vite dev server
* `npm run build` → Build for production
* `npm run preview` → Preview production build
* `npm run lint` → Run ESLint

### Backend

* `npm start` → Start backend (e.g., `nodemon index.js`)

---

## 🖼️ Screenshots


<img width="1512" height="860" alt="Ekran Resmi 2025-08-28 16 17 05" src="https://github.com/user-attachments/assets/7031cd48-2d91-419c-aec0-930769a464c6" />
<img width="1512" height="860" alt="Ekran Resmi 2025-08-28 16 17 19" src="https://github.com/user-attachments/assets/891f55ba-7208-4fa9-846e-326392bdc2e5" />
<img width="1512" height="860" alt="Ekran Resmi 2025-08-28 16 17 35" src="https://github.com/user-attachments/assets/8e27f8ba-4703-46a4-8f11-68b7d6cc3331" />
<img width="1512" height="860" alt="Ekran Resmi 2025-08-28 16 17 45" src="https://github.com/user-attachments/assets/1763a0a4-5979-4049-99db-f6e4b910990c" />
<img width="1512" height="860" alt="Ekran Resmi 2025-08-28 16 18 50" src="https://github.com/user-attachments/assets/ef2d14aa-6248-44be-a665-bda8844cd378" />


## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/awesome`
3. Commit changes: `git commit -m "feat: add awesome feature"`
4. Push branch: `git push origin feature/awesome`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.
