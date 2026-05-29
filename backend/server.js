require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const verifyToken = require('./middleware/verifyToken');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes (protect user routes)
app.use('/api/users', verifyToken, userRoutes);
app.use('/api/auth', authRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((error) => {
  console.log(error);
});

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Server Running");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});