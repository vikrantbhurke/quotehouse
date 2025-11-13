"use server";
import { colors } from "@/global/constants";

export async function getRandomColor(page: number) {
  const index = page % colors.length;
  const filteredColors = colors.filter((_c: string, i: number) => i !== index);
  const randomIndex = Math.floor(Math.random() * filteredColors.length);
  return filteredColors[randomIndex];
}
