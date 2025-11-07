import { Outfit } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin"],
  display: "swap", // optional: reduces layout shift
  variable: "--font-outfit", // optional: CSS variable for use in Tailwind or global CSS
});
