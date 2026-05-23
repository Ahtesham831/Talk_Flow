# 💬 TalkFlow

TalkFlow is a premium, real-time messaging application designed with a stunning, high-contrast Light Mode user interface. It combines high-speed WebSockets, cloud-based media sharing, transactional emails, and advanced security layers to deliver a modern, production-grade chatting experience.

🔗 **GitHub Repository**: [Ahtesham831/Talk_Flow](https://github.com/Ahtesham831/Talk_Flow)  
🔗 **Live Deployment**: [TalkFlow Live](https://talk-flow-ch.vercel.app) *(or add your custom Vercel/Render link here!)*

---

## ✨ Features

- **Real-Time Messaging**: Instant bi-directional communication powered by high-performance WebSockets.
- **Image Sharing**: Share photos instantly using seamless Cloudinary cloud integrations.
- **Premium Light Mode UI**: A gorgeous, high-contrast aesthetic inspired by modern SaaS interfaces, featuring subtle gradient backgrounds, pastel blur circles, and glassmorphic cards.
- **Micro-Animations & Keystroke Sounds**: Playful mechanical keyboard keystroke click sounds and active tab transitions to enrich user engagement.
- **Secure Authentication**: Cookie-based session storage utilizing JWTs and highly secure Bcrypt password hashing.
- **Advanced Security & Protection**: Enterprise-grade bot protection and rate limiting integrated directly via **Arcjet**.
- **Transactional Welcome Emails**: Automated, custom HTML welcome emails sent directly to new registrants using **Resend**.
- **Database Graceful Failover**: Robust error handling that lets the server start smoothly and logs connection guidance if MongoDB or environment keys are not yet configured.

---

## 🛠️ Tech Stack

### Frontend
- **React 19** – Component-driven UI library
- **Vite 8** – Next-generation bundler and lightning-fast dev server
- **Tailwind CSS v3** – Premium utility-first styling
- **DaisyUI v4** – Clean component styling palette
- **Zustand v5** – Ultra-lightweight global state manager
- **Socket.io-client v4** – Real-time WebSocket connectivity
- **React Hot Toast** – Responsive, stylish alert notifications
- **Lucide React** – Clean, modern, crisp outline icons

### Backend
- **Node.js (ES Modules)** – Modern asynchronous runtime
- **Express.js** – Robust REST API router and server framework
- **MongoDB & Mongoose** NoSQL database modeling for users, chats, and messages
- **Socket.io v4** – Real-time event-driven communication
- **Arcjet** – Intelligent rate-limiting, security shields, and bot filters
- **Resend** – High-reliability transactional mail delivery
- **Cloudinary** – Cloud-hosted storage and CDN for user avatars and media messages
- **JWT & Cookie-Parser** – Secure session tokens and credentials verification
- **Bcrypt.js** – Highly secure password salting and hashing

---

## 📂 Project Structure

```text
TalkFlow/
├── backend/                  # Node/Express API & Socket Server
│   ├── src/
│   │   ├── controllers/      # Route controllers (Auth, Message controllers)
│   │   ├── emails/           # Resend HTML email templates & senders
│   │   ├── lib/              # Core tools (MongoDB, Arcjet, Socket.io, Resend helper)
│   │   ├── middleware/       # Route guards (JWT verification, Arcjet security)
│   │   ├── models/           # Mongoose schemas (User, Message)
│   │   ├── routes/           # Express router endpoints
│   │   └── server.js         # Backend entrypoint (port & server listener)
│   ├── .env                  # Environment secrets (ignored in Git)
│   ├── .env.example          # Environment variables template
│   └── package.json          # Backend dependencies & script definitions
│
├── frontend/                 # React SPA
│   ├── public/               # Public static assets & mechanical click sounds
│   ├── src/
│   │   ├── components/       # Custom React UI components (Chat containers, headers, loaders)
│   │   ├── hooks/            # Custom React hooks (Keystroke sounds handler)
│   │   ├── lib/              # Axios API clients
│   │   ├── pages/            # Page layouts (ChatPage, LoginPage, SignUpPage)
│   │   ├── store/            # Zustand state stores (Auth store, Chat store)
│   │   ├── App.jsx           # Monitored app routes and global wrappers
│   │   ├── index.css         # Global styles and customized Light Theme overrides
│   │   └── main.jsx          # Frontend index script
│   ├── index.html            # Core HTML template labeled "TalkFlow"
│   ├── tailwind.config.js    # Tailwind layout settings
│   ├── vite.config.js        # Vite compilation options
│   └── package.json          # Frontend packages and script hooks
│
└── README.md                 # Detailed documentation (This file)
```

---

## 🚀 Installation & Local Setup

### Prerequisites
Ensure you have **Node.js** (LTS v20 or v22 recommended) and **npm** installed on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/Ahtesham831/Talk_Flow.git
cd Talk_Flow
```

### 2. Configure Environment Variables
Navigate to the `backend/` directory, copy the template file, and populate your API credentials in your own local `.env` file:
```bash
cd backend
cp .env.example .env
```
*(Open the newly created `.env` file and add your MongoDB URI, JWT secret, Cloudinary, and Arcjet keys as specified in the `.env.example` file).*


### 3. Run the Backend
From the `backend/` directory, install packages and start the hot-reloading development server:
```bash
npm install
npm run dev
```
The server will start up on **`http://localhost:3000`** and connect to your MongoDB database.

### 4. Run the Frontend
Open a new terminal window, navigate to the `frontend/` directory, install packages, and start Vite:
```bash
cd frontend
npm install
npm run dev
```
The client app will launch on **`http://localhost:5173`**.

---

## 🛡️ License

This project is licensed under the **ISC License**. Feel free to use, modify, and build upon this application.

---

*Crafted with ❤️ by Ahtesham*
