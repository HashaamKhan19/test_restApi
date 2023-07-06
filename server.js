const express = require("express");
const app = express();

/////////ROUTES/////////
app.get("/", (req, res) => {
  res.send("Whats up bro");
});

app.listen(3000, () => {
  console.log("server started");
});
