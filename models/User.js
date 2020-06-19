const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cart: [
    {
      itemID: mongoose.Schema.Types.ObjectId,
    },
  ],
  mobile: String,
  token: String,
});

const User = mongoose.model("users", UserSchema, "users");

module.exports = User;
