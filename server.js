const app = require("./app");
const config = require("./app/config");

// Start the server
const PORT = config.app.port || 3000; // Use port from config or default to 3000
app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server:", err);
  } else {
    console.log(`Server is running on port ${PORT}.`);
  }
});
