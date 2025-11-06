import { ClientSession, Model } from "mongoose";
import { connectMongoose } from "@/global/configurations";
import { EditDTO, getSession } from "@/global/database";

export const editMany = async (
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

  return await Model.updateMany(
    filter,
    opMap[mode],
    getSession(session)
  ).exec();
};
