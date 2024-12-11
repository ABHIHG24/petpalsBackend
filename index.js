const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // Allowing trusted origin
    credentials: true,
  })
);
app.use(express.json());

// MongoDB connection
const dburl = process.env.DB_URL;
mongoose
  .connect(dburl)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
    process.exit(1); // Exit on critical error
  });

// Routes
app.use("/api/registration", require("./router/Registrationroute"));
app.use("/api/artical", require("./router/articalroute"));
app.use("/api/form", require("./router/adoptionform"));
app.use("/api/request", require("./router/adoptionreq"));
app.use("/api/payment", require("./router/payment"));

// Server startup
const port = process.env.PORT || 5000; // Use environment variable or fallback to 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("Gracefully shutting down...");
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed");
    process.exit(0);
  });
});
