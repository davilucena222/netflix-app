const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/netflix").then(result => console.log("DB Connected!")).catch((error) => console.error(error)); 

app.listen(5000, () => {
  console.log("Server is running on port 5000!");
});