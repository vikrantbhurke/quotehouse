import { ClientSession, Model } from "mongoose";
import { connectMongoose } from "@/global/configurations";

export const countDocs = async (
  Model: Model<any>,
  filter: object = {},
  session?: ClientSession
) => {
  await connectMongoose();
  const filterLength = Object.keys(filter).length;

  if (!filterLength) {
    return await Model.estimatedDocumentCount()
      .session(session ?? null)
      .exec();
  }

  return await Model.countDocuments(filter)
    .session(session ?? null)
    .exec();
};
