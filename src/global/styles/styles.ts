import { darken } from "@mantine/core";

export const textShadow = (color: string) => ({
  textShadow: `2px 2px 2px ${darken(color, 0.2)}`,
});
