import { CitedQuote } from "../model";
import * as db from "@/global/database";

export async function saveCitedQuote(newCitedQuote: any) {
  await db.saveOne(CitedQuote, newCitedQuote);
}
