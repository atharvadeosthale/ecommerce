const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./connections/db");
const auth = require("./modules/auth");
const user = require("./modules/user");
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", user);
app.use("/auth", auth);

app.listen(PORT, () => {
  console.log("Server listening at port " + PORT);
});
