import { connectMongoose } from "@/global/configurations";
import { ClientSession, Model } from "mongoose";
import { GetOneDTO } from "@/global/database";

export const getOne = async (
  Model: Model<any>,
  getOneDTO: GetOneDTO,
  session?: ClientSession
) => {
  await connectMongoose();

  const {
    conditions = {},
    index = null,
    select = "",
    populate = [],
    populateSelect = [],
  } = getOneDTO;

  let query: any;

  // Either pass index or conditions object
  if (index !== null) {
    query = Model.findOne({}, null, { session })
      .session(session ?? null)
      .skip(index)
      .limit(1);
  } else if (Object.keys(conditions)[0] === "_id") {
    query = Model.findById(conditions._id, null, { session }).session(
      session ?? null
    );
  } else {
    query = Model.findOne({ ...conditions }, null, { session }).session(
      session ?? null
    );
  }

  if (select.length) query = query.select(select);

  if (populate.length && populateSelect.length)
    populate.forEach((p, i) => (query = query.populate(p, populateSelect[i])));

  const document: any = await query.exec();
  if (!document) return null;
  return document;
};
