const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessagingSchema = new Schema({
  message: {
    type: String,
  },
});

module.exports = mongoose.model("message", MessagingSchema);
