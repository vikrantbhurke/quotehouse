"use server";
import { saveCitedQuote } from "../queries";

export async function citedQuote(newCitedQuote: any) {
  console.log("newCitedQuote", newCitedQuote);
  await saveCitedQuote(newCitedQuote);
}
