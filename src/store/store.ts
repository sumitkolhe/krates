import mongoose from "mongoose";
import config from "../config/config"

const dbConnection = mongoose.connect(
  config.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("connected to local db");
  }
);

module.exports = dbConnection