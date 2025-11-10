import { darken } from "@mantine/core";

export const boxShadow = (color: string) => ({
  boxShadow: `2px 2px 3px ${darken(color, 0.3)}`,
});

export const textShadow = (color: string) => ({
  textShadow: `2px 2px 3px ${darken(color, 0.3)}`,
});
