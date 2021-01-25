const isDev = process.env.NODE_ENV !== "production";

export const config = {
  //Server vars
  SERVER_HOST: isDev ? "localhost" : "0.0.0.0",
  SERVER_PORT: isDev ? 3000 : process.env.PORT || 80,
  SERVER_PROTOCOL: isDev ? "http" : process.env.SERVER_PROTOCOL || "https",

  //MongoDB vars
  DB_NAME: process.env.DB_NAME ? process.env.DB_NAME : "box_data",
  MONGO_URL: process.env.MONGO_URL
    ? process.env.MONGO_URL
    : "mongodb://localhost:27017",
};
