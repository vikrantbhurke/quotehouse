import { ClientSession, Model } from "mongoose";
import { connectMongoose } from "@/global/configurations";
import { getSession } from "@/global/database";

export const dropMany = async (
  Model: Model<any>,
  conditions: object = {},
  session?: ClientSession
) => {
  await connectMongoose();
  return await Model.deleteMany(conditions, getSession(session)).exec();
};
