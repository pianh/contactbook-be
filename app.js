const express = require("express");
const cors = require("cors");
const app = express();
const contactsRouter = require("./app/routes/contact.route");

// Enable CORS for all routes
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Root route handler
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the contact book application." });
});
app.use("/api/contacts", contactsRouter);

// Export the app to be used in other files
module.exports = app;
