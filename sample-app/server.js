const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Get image name from environment variable
const IMAGE_NAME = process.env.IMAGE_NAME || "Local Development";

// Serve static files
app.use(express.static("public"));

// API to send image name
app.get("/api/image", (req, res) => {
  res.json({
    image: IMAGE_NAME,
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime()
  });
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
  console.log(`Image: ${IMAGE_NAME}`);
});
