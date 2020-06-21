const mongo = require("mongoose");

mongo.connect(
  "",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Connection to MongoDB failed!");
    } else {
      console.log("Connected with MongoDB!");
    }
  }
);

module.exports = mongo.connection;
