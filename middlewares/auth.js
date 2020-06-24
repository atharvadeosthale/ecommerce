const mongoose = require("mongoose");
const User = require("../models/User");

const auth = async (req, res, next) => {
  try {
    if (!req.headers["x-auth-token"]) {
      return res.status(401).json({ msg: "Invalid Authorization" });
    }
    const token = req.headers["x-auth-token"];
    const result = await User.findOne({ token });
    if (!result) {
      return res.status(401).json({ msg: "Invalid Authorization" });
    }
    req.user = result;
    next();
  } catch (err) {
    console.error(err);
    return res.status(501).json({ msg: "Internal Server Error" });
  }
};

module.exports = auth;
