import { ClientSession, Model } from "mongoose";
import { GetManyDTO } from "@/global/database";
import { connectMongoose } from "@/global/configurations";
import { Order, SearchMode, Size, Sort, Type } from "@/global/enums";

export const getMany = async (
  Model: Model<any>,
  getManyDTO: GetManyDTO,
  session?: ClientSession
) => {
  await connectMongoose();

  const {
    page = 0,
    search = "",
    select = "",
    filter = {},
    populate = [],
    searchFields = [],
    populateSelect = [],
    size = Size.Twelve,
    type = Type.Paged,
    sort = Sort.Created,
    mode = SearchMode.Or,
    order = Order.Descending,
  } = getManyDTO;

  let searchQuery = {};

  if (search && searchFields.length) {
    const regex = new RegExp(
      search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      "i"
    );

    const fields = searchFields.map((field) => ({
      [field]: { $regex: regex },
    }));

    searchQuery = mode === "and" ? { $and: fields } : { $or: fields };
  }

  let totalElements = 0;
  const queryFilter = search ? { ...filter, ...searchQuery } : filter;
  const filterLength = Object.keys(queryFilter).length;

  if (!filterLength) {
    totalElements = await Model.estimatedDocumentCount()
      .session(session ?? null)
      .exec();
  } else {
    totalElements = await Model.countDocuments(queryFilter)
      .session(session ?? null)
      .exec();
  }

  let query: any;

  if (type === "random") {
    // Works only when totalElements - pageSize > 0
    const max = Math.max(totalElements - size, 1);
    const randomSkip = Math.max(0, Math.floor(Math.random() * max));

    query = Model.find(queryFilter, null, { session })
      .session(session ?? null)
      .skip(randomSkip)
      .limit(size);
  } else if (type === "paged") {
    query = Model.find(queryFilter, null, { session })
      .session(session ?? null)
      .skip(page * size)
      .limit(size)
      .sort({
        [sort]: order === Order.Ascending ? 1 : -1,
        _id: order === Order.Ascending ? 1 : -1,
      });
  } else if (type === "all") {
    query = Model.find(queryFilter, null, { session }).session(session ?? null);
  }

  if (select.length) query = query.select(select);

  if (populate.length && populateSelect.length)
    populate.forEach((p, i) => (query = query.populate(p, populateSelect[i])));

  const documents = await query.exec();

  const pages = Math.ceil(totalElements / size);

  return {
    totalElements,
    totalPages: pages,
    content: documents,
    type,
    mode,
    size,
    page,
    sort,
    order,
    filter,
    search,
    select,
    firstPage: page === 0,
    emptyPage: documents.length === 0,
    lastPage: totalElements ? page === pages - 1 : true,
  };
};
