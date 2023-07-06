const express = require("express");
const app = express();
const mongoose = require("mongoose");

/////////ROUTES/////////
app.get("/", (req, res) => {
  res.send("Whats up bro");
});

mongoose
  .connect(
    "mongodb+srv://hashaam:hk42471072@testcluster.qx7vnml.mongodb.net/NodeApiTest?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB Connected");
    app.listen(3000, () => {
      console.log("server started");
    });
  })
  .catch((err) => console.log(err));
