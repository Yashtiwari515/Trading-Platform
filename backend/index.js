require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoute = require("./Routes/AuthRoute");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { WatchlistModel } = require("./models/WatchlistModel");
const { OrdersModel } = require("./models/OrdersModel");

const app = express();

// 🔑 Load environment variables
const PORT = process.env.PORT || 6969;
const MONGO_URL = process.env.MONGO_URL;
const CLIENT_URL_FRONTEND = process.env.CLIENT_URL_FRONTEND;
const CLIENT_URL_DASHBOARD = process.env.CLIENT_URL_DASHBOARD;

// ✅ CORS with env vars
app.use(
  cors({
    origin: [CLIENT_URL_FRONTEND, CLIENT_URL_DASHBOARD],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Connect MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Routes
app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allWatchlists", async (req, res) => {
  const allWatchlists = await WatchlistModel.find({});
  res.json(allWatchlists);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.json({ success: true, message: "Order saved successfully" });
});

app.get("/allOrders", async (req, res) => {
  const allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
