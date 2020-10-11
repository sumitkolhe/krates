import Mongoose from "mongoose";
import config from "../config/config";

let database: Mongoose.Connection;

export const dbConnect = () => {
  const uri = config.MONGO_URI;

  if (database) {
    return;
  }

  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  database = Mongoose.connection;
  database.once("open", async () => {
    console.log("Connected to database");
  });
  database.on("error", () => {
    console.log("Error connecting to database");
  });
};

export const dbDisconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};
