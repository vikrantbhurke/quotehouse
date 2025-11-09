"use server";
import { getQuotes } from "../queries";
import { getRandomColor } from "./get-random-color";

export async function readQuote(getManyDTO: any) {
  const quotesPage = await getQuotes(getManyDTO);
  const color = await getRandomColor(getManyDTO.page);

  return {
    ...quotesPage,
    color,
  };
}
