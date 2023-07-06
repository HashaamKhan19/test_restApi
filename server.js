const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");

app.use(express.json());

const port = process.env.PORT || 3000;

/////////ROUTES/////////
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Whats up bro");
});

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected.");
    app.listen(port, () => {
      console.log("server started");
    });
  })
  .catch((err) => console.log(err));
