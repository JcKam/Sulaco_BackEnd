const express = require("express");

const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Sulaco");

const userRoutes = require("./routes/user");

app.use(userRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ error: "Cette route n'existe pas !" });
  console.log("Server Started");
});

app.listen(4000, () => {
  console.log("Server Started");
});
