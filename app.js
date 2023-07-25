const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Root route handler
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the contact book application." });
});

// Export the app to be used in other files
module.exports = app;
