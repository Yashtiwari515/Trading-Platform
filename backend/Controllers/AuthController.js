const UserModel = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

// Signup
module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    console.log("Before save:", password);
    const user = await UserModel.create({ email, password });
    console.log("After save:", user.password);

    const token = createSecretToken(user._id);
    res.cookie("token", token);

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user,
    });
    // next();
  } catch (error) {
    console.error(error);
  }
};

// Login
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect email" });
    }

    console.log("Entered:", password);
    console.log("Stored :", user.password);
    const auth = await bcrypt.compare(password, user.password);
    console.log("Match? ", auth);

    if (!auth) {
      return res.json({ message: "Incorrect password" });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true, // so JS can't read it
      sameSite: "lax", // needed for cross-site requests
      secure: false, // true if HTTPS
    });

    res.status(201).json({
      message: "User logged in successfully",
      success: true,
    });
    // next();
  } catch (error) {
    console.error(error);
  }
};
