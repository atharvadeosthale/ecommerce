const mongo = require("mongoose");

mongo.connect(
  "mongodb+srv://atharva:codershots@cluster-utfcg.mongodb.net/ecommerce?retryWrites=true&w=majority",
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
