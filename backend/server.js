const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes =
  require('./routes/authRoutes')

  app.use('/api/auth', authRoutes)

// const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://Saitej23:Katturi23@cluster0.k2kujdm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
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
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});