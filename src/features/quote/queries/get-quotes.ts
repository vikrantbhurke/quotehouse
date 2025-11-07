import { Quote } from "../model";
import * as db from "@/global/database";
import { Order, Size } from "@/global/enums";

const size = Size.One;
const select = "content author";
const order = Order.Ascending;

export async function getQuotes(getManyDTO: any) {
  return await db.getMany(Quote, {
    ...getManyDTO,
    size: getManyDTO.size || size,
    select: getManyDTO.select || select,
    order: getManyDTO.order || order,
  });
}
