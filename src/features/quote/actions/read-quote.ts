"use server";
import { getQuotes } from "../queries";

export async function readQuote(getManyDTO: any) {
  return await getQuotes(getManyDTO);
}
