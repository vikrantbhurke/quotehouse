import { Quote } from "../model";
import * as db from "@/global/database";

export async function checkQuote(filter: any) {
  return await db.checkDoc(Quote, filter);
}
