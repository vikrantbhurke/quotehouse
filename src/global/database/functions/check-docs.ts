import { ClientSession, Model } from "mongoose";
import { connectMongoose } from "@/global/configurations";

export const checkDocs = async (
  Model: Model<any>,
  filters: object[],
  session?: ClientSession
): Promise<boolean[]> => {
  await connectMongoose();

  const docs = await Model.find({ $or: filters })
    .session(session ?? null)
    .select("_id")
    .lean()
    .exec();

  const filtersMatch = (document: any, filter: any): boolean =>
    Object.keys(filter).every(
      (key) => String(document[key]) === String(filter[key])
    );

  return filters.map((f) => docs.some((d) => filtersMatch(d, f)));
};
