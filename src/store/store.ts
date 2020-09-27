import mongoose from "mongoose";

const dbConnection = mongoose.connect(
  "mongodb://localhost:27017/box-dev",
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