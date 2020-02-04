const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

// Either set port to default or use 5000
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ATLAS_URI = located in .env
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// declare routes here
const router = require("./routes/types");

// Use routes here
app.use("/types", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
