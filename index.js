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
// app.use(cors());
app.use(
  cors({
    // origin: "http://localhost:3000",
    origin: true,
    credentials: true, // Don't forget to set this if your request includes credentials
  })
);

app.use(express.json());

const dburl =
  "mongodb+srv://petpals:iiHCvsqGaautYeZf@cluster0.hhki8kd.mongodb.net/petpals?retryWrites=true&w=majority";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const User = require("./model/Registration");
const { url } = require("inspector");
const { urlToHttpOptions } = require("url");
app.use("/api/petpals", require("./router/Registrationroute"));
app.use("/api/artical", require("./router/articalroute"));
app.use("/api/form", require("./router/adoptionform"));
app.use("/api/message", require("./router/message"));
app.use("/api/item", require("./router/shopping"));
app.use("/api/request", require("./router/adoptionreq"));
app.use("/api/payment", require("./router/payment"));

const port = 5000;

// async function insertdata() {
//   await User.create({
//     Username: "abhishek",
//   });
// }
// insertdata();
mongoose
  .connect(dburl, connectionParams)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database:", err);
  });

app.listen(port, () => console.log(`Server is running on port ${port}`));
