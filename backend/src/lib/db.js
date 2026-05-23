import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = ENV;
    if (!MONGO_URI || MONGO_URI === "your_mongo_uri_here") {
      console.warn("\n⚠️  WARNING: MONGO_URI is not configured or is set to the placeholder in '.env'.");
      console.warn("Please set a valid MongoDB connection string to enable database features.\n");
      return;
    }

    const conn = await mongoose.connect(MONGO_URI);
    console.log("MONGODB CONNECTED:", conn.connection.host);
  } catch (error) {
    console.error("Error connection to MONGODB:", error);
    process.exit(1); // 1 status code means fail, 0 means success
  }
};
