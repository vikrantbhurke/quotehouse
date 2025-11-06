"use server";
import mongoose from "mongoose";
import { idAliasPlugin } from "@/global/database";

mongoose.plugin(idAliasPlugin);

let connection: typeof mongoose | null = null;

export const connectMongoose = async () => {
  if (connection) return connection;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not defined");

  if (mongoose.connection.readyState >= 1) {
    connection = mongoose;
    return connection;
  }

  connection = await mongoose.connect(uri);

  console.log("✅ Mongoose connected");
  return connection;
};

export default connectMongoose;
