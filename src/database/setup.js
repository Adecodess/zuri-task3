// require mongoose module
const mongoose = require("mongoose");
// setup enviroment variable
require("dotenv").config();
const { MONGO_URI } = process.env;

// connect mnogoose to database

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("database connected succesfully..");
  } catch (error) {
    console.error(err.message);
  }
};

module.exports = connectDB;
