const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.authMiddleware = async (req, res, next) => {
  try {
    console.log("🔍 Cookies received:", req.cookies);

    const token = req.cookies.token;

    if (!token) {
      console.log("❌ No token found in cookies");
      return res.status(401).json({ status: false, message: "No token provided" });
    }

    // Token verify
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    console.log("✅ Token decoded:", decoded);

    // User find
    const user = await User.findById(decoded.id);
    if (!user) {
      console.log("❌ User not found");
      return res.status(401).json({ status: false, message: "User not found" });
    }

    // Attach user to request
    req.user = user;
    console.log("✅ User attached to request:", user.email);

    next();
  } catch (err) {
    console.log("❌ Token verification error:", err.message);
    return res.status(401).json({ status: false, message: "Invalid or expired token" });
  }
};

