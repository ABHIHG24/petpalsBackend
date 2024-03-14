const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShoppingSchema = new Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price_INR: {
    type: String,
  },
  img: {
    type: String,
  },
  uid: {
    type: String,
  },
});

module.exports = mongoose.model("Shopping", ShoppingSchema);
