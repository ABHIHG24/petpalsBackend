const mongoose = require("mongoose");
const express = require("express");
const app = express();

var cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51OnZUpSB5YEoLiYMqfnKyHDTQrSbH5A5A15q1EcXq3VCxYXyI16zRG8ytvy2RURZtO895m8awFAPAtDpUuopFjzp00jSUZOeLt"
);

app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());

// Use the correct DB URL, update with the correct credentials if needed
const dburl = "mongodb+srv://petpals:iiHCvsqGaautYeZf@cluster0.hhki8kd.mongodb.net/petpals?retryWrites=true&w=majority";

// const dburl = "mongodb://localhost:27017/petpals"; // Local MongoDB connection

// Connect to the MongoDB database
mongoose
  .connect(dburl)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database:", err);
  });

// Define routes
app.use("/api/registration", require("./router/Registrationroute"));
app.use("/api/artical", require("./router/articalroute"));
app.use("/api/form", require("./router/adoptionform"));
app.use("/api/request", require("./router/adoptionreq"));
app.use("/api/payment", require("./router/payment"));

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
