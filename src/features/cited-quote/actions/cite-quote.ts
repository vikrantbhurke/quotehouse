"use server";
import * as quote from "@/features/quote/actions";
import { saveCitedQuote } from "../queries";

export async function citedQuote(newCitedQuote: any) {
  try {
    const exists = await quote.checkQuote(newCitedQuote.content);
    if (exists) throw new Error("Quote already exists");
    else await saveCitedQuote(newCitedQuote);
  } catch (error) {
    throw error;
  }
}
