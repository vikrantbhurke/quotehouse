"use server";
import { colors } from "@/global/constants";

export async function getRandomColor(page: number) {
  const index = page % colors.length;
  const filtered = colors.filter((color: string) => color !== colors[index]);
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}
