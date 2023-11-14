const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv").config();
const MONGO_URL = mongodb + srv; //anjalisharma243001:Qs6vNEQM7SK0hJxL@cluster0.jl0vged.mongodb.net/blogapp/;
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
