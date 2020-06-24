const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const auth = require("../../middlewares/auth");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({ msg: "Email and Password are required" });
    }
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ msg: "Incorrect email or password" });
    }
    const token = await jwt.sign({ email }, process.env.SECRET_AUTH_KEY);
    user.token = token;
    const { name, mobile, cart } = user;
    user.save();
    res.json({ email, name, mobile, token, cart });
  } catch (err) {
    console.error(err);
    res.status(501).json({ msg: "The server encountered an error" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, mobile } = req.body;
    if (!name || !email || !password || !mobile) {
      return res.status(400).json({ msg: "All the fields are required" });
    }
    const checkEmail = await User.findOne({ email });
    const checkMobile = await User.findOne({ mobile });
    if (checkEmail) {
      // user exists
      return res
        .status(400)
        .json({ msg: "User with that email already exists" });
    }
    if (checkMobile) {
      // user exists
      return res
        .status(400)
        .json({ msg: "User with that mobile already exists" });
    }
    const token = await jwt.sign({ email }, process.env.SECRET_AUTH_KEY);
    const newUser = new User({
      name,
      email,
      password,
      mobile,
      token,
    });
    newUser.save();
    res.json({ name, email, mobile, token, cart: [] });
  } catch (err) {
    console.error(err);
    res.status(501).json({ msg: "The server encountered an error" });
  }
});

router.get("/auth", auth, async (req, res) => {
  try {
    const result = await User.findOne({ token: req.user.token });
    res.json({
      name: result.name,
      email: result.email,
      mobile: result.mobile,
      token: result.token,
      cart: result.cart,
    });
  } catch (err) {
    console.error(err);
    res.status(501).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;
