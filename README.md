Stock Trading Platform (Zerodha Clone)

A full-stack stock trading platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
This project replicates the core features of Zerodha’s dashboard and helps in understanding how real-world trading applications are structured.

⚡️ Built for learning — no real trades are made.
Dummy data is used since stock market APIs require paid keys.

🚀 Features

🔐 Authentication & Authorization

User login/signup with JWT + cookies

Secure routes with middleware

📊 Dashboard

Overview of portfolio, watchlists, and performance

📝 Orders Management

Place new buy/sell orders (dummy data)

Track all past orders

💼 Holdings & Positions

Display holdings with P&L (dummy data)

Track current positions

⭐ Watchlist

Add/remove stocks to watchlist

Quick view of important stocks

💰 Funds Section

Show available balance & fund details

👤 Profile & Logout

Secure logout (clears token + cookies)

Profile dropdown with animations

🛠️ Tech Stack
Frontend:

⚛️ React.js (Vite + React Router)

🎨 Tailwind CSS + Framer Motion (UI & animations)

Backend:

🟢 Node.js + Express.js

🍪 Cookie Parser & JWT for authentication

🌐 CORS for cross-origin requests

Database:

🍃 MongoDB (Atlas Cluster)

📂 Project Structure
/frontend       # React app (Dashboard + Client)
/backend        # Node.js + Express API
   /models      # Mongoose models
   /routes      # Auth + API routes

⚙️ Installation & Setup
Clone the repo

git clone https://github.com/Yashtiwari515/Trading-Platform.git

cd zerodha-clone

Backend Setup

cd backend

npm install


Create .env file:

PORT=6969

MONGO_URL=mongodb+srv://tiwariyash515:Yash%401234@stocktradingplatform.8pcvkit.mongodb.net/database?retryWrites=true&w=majority&appName=StockTradingPlatform

TOKEN_KEY=supersecretkey123

CLIENT_URL_FRONTEND=https://trading-platform-frontend-gamma.vercel.app

CLIENT_URL_DASHBOARD=https://trading-platform-dashboard-two.vercel.app



Run backend:
npm start

Frontend Setup

cd frontend

npm install


Create .env file:

VITE_API_URL=https://trading-platform-gold.vercel.app

VITE_FRONTEND_URL=https://trading-platform-frontend-gamma.vercel.app

VITE_DASHBOARD_URL=https://trading-platform-dashboard-two.vercel.app



Run frontend:

npm run dev

⚠️ Disclaimer

This project is for educational purposes only.
It uses dummy stock data because real stock APIs require paid keys.
No real financial transactions are performed.


✨ Learning Takeaways

📚 Practiced MERN stack integration

🔑 Learned JWT-based authentication

🗄️ Understood MongoDB schema design for stock trading apps

🎨 Worked on React UI/UX with Tailwind + Framer Motion

🚀 Deployed full-stack apps on Vercel + MongoDB Atlas

Made with ❤️ !
