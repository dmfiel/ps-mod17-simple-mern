import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

try {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }

  mongoose.connect(process.env.MONGO_URI);
} catch (error) {
  console.error(error);
  process.exit(1);
}

export default mongoose.connection;
