const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

// import routes

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../bin")));

// API routes

app.get("*", function (req, res) {
  return res.sendFile(path.join(__dirname, "../bin", "index.html"));
});

app.listen(4000, console.log("application is active on port 4000"));
