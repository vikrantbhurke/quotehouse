import { colors } from "./colors";

export function getRandomColor(excludeHex?: string) {
  const filtered = excludeHex
    ? colors.filter((c) => c.hex !== excludeHex)
    : colors;

  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex].hex;
}
