import { ClientSession, Model } from "mongoose";
import { connectMongoose } from "@/global/configurations";
import { getSession } from "@/global/database";

export const dropOne = async (
  Model: Model<any>,
  conditions: object = {},
  session?: ClientSession
) => {
  await connectMongoose();
  return await Model.deleteOne(conditions, getSession(session)).exec();
};
