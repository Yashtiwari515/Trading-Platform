const { Signup, Login } = require("../Controllers/AuthController");
const { authMiddleware } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    status: true,
    message: "Welcome to your dashboard",
    email: req.user.email
  });
});

router.post("/logout", (req, res) => {
  // Clear the cookie (assuming you store JWT in "token")
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax", // change if you used "strict" or "none"
    secure: false    // true if running on https
  });

  res.json({ status: true, message: "Logged out successfully" });
  
});

module.exports = router;
