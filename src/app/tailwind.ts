import clsx from "clsx";

export const fadeZen = "transition-opacity duration-700 ease-in-out";

export const getZen = (isZen: boolean) =>
  clsx(isZen ? "opacity-0" : "opacity-100", fadeZen);

export const fadePseudo = "transition-opacity duration-300 ease-in-out";

export const opacity =
  "opacity-100 hover:opacity-80 focus:opacity-80 active:opacity-80" +
  fadePseudo;
