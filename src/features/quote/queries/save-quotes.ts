import { Quote } from "../model";
import * as db from "@/global/database";

export async function saveQuotes(newQuotes: any) {
  await db.saveMany(Quote, newQuotes);
}
