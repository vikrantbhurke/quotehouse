"use server";
import * as queries from "../queries";

export async function checkQuote(content: string) {
  return await queries.checkQuote({ content });
}
