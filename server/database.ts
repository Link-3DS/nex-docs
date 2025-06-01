import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection_string: string = process.env.MONGO_CONNECTION_STRING as string;

export async function connect(): Promise<void> {
  try {
    await mongoose.connect(connection_string);
    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
}