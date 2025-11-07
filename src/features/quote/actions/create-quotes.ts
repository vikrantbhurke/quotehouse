"use server";
import { saveQuotes } from "../queries";

export async function createQuotes(newQuotes: any) {
  await saveQuotes(newQuotes);
}
