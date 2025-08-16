require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const authRoute = require("./Routes/AuthRoute");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { WatchlistModel } = require("./models/WatchlistModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 6969;
const url = process.env.MONGO_URL;
const app = express();

const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
mongoose
  .connect(url)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allWatchlists", async (req, res) => {
  let allWatchlists = await WatchlistModel.find({});
  res.json(allWatchlists);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.listen(PORT, () => {
  console.log("hello jii!");
});
