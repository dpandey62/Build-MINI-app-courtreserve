const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Test Protected Route
const protect = require("./middleware/auth.middleware");
app.get("/api/dashboard", protect, (req, res) => {
  res.json({ message: "Welcome to Dashboard" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
