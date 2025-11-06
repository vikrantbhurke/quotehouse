import { connectMongoose } from "@/global/configurations";
import { ClientSession, InsertManyOptions, Model } from "mongoose";

export const saveMany = async (
  Model: Model<any>,
  documents: object[],
  session?: ClientSession
) => {
  await connectMongoose();
  const options: InsertManyOptions = { ordered: false };
  if (session) options.session = session;
  await Model.insertMany(documents, options);
};
