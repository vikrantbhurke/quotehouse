import { ClientSession, Model } from "mongoose";
import { connectMongoose } from "@/global/configurations";
import { EditDTO } from "@/global/database";

export const editOne = async (
  Model: Model<any>,
  {
    filter = {},
    update = {},
    numberField = "",
    arrayField = "",
    element,
    mode,
  }: EditDTO,
  session?: ClientSession
) => {
  await connectMongoose();

  const opMap: Record<string, object> = {
    inc: { $inc: { [numberField]: 1 } },
    dec: { $inc: { [numberField]: -1 } },
    push: { $addToSet: { [arrayField]: element } },
    pull: { $pull: { [arrayField]: element } },
    "inc-push": {
      $addToSet: { [arrayField]: element },
      $inc: { [numberField]: 1 },
    },
    "dec-pull": {
      $pull: { [arrayField]: element },
      $inc: { [numberField]: -1 },
    },
    set: { $set: update },
  };

  const options: any = { new: true };
  if (session) options.session = session;
  return await Model.updateOne(filter, opMap[mode], options).exec();
};
