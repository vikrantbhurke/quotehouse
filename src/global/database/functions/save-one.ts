import { connectMongoose } from "@/global/configurations";
import { ClientSession, Model } from "mongoose";
import { getSession } from "@/global/database";

export const saveOne = async (
  Model: Model<any>,
  document: object,
  session?: ClientSession
) => {
  await connectMongoose();
  await Model.create([document], getSession(session));
};
