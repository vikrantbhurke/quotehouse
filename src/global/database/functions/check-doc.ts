import { ClientSession, Model } from "mongoose";
import { connectMongoose } from "@/global/configurations";

export const checkDoc = async (
  Model: Model<any>,
  filter: object,
  session?: ClientSession
) => {
  await connectMongoose();

  return !!(await Model.exists(filter)
    .session(session ?? null)
    .exec());
};
