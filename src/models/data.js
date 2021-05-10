// require mongoose
const mongoose = require("mongoose");
// create schema
const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

// create an instance of the model
const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
