import app from "./app";
import mongoose from "mongoose";
import config from "./config";

async function database() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("database connect successfully");
    app.listen(config.port, () => {
      console.log("server run successfully");
    });
  } catch (error) {
    console.log(error);
  }
}

database();
