import clsx from "clsx";
import { outfit } from "@/global/styles/fonts";
import { lighten, Space, Stack, Text, darken } from "@mantine/core";

export function ItemQuote({ quote, color }: any) {
  const text = clsx(
    outfit.className,
    "antialiased",
    "selection:bg-[var(--selection-bg)]"
  );

  const style = {
    textShadow: `2px 2px 2px ${darken(color, 0.2)}`,
    "--selection-bg": lighten(color, 0.5),
  };

  return (
    <Stack p="xl" h="100vh" justify="space-between" align="center">
      <Space h={60} />

      <Stack gap="xl">
        <Text
          c="white"
          fz={20}
          fw={600}
          ta="center"
          hiddenFrom="sm"
          style={style}
          className={text}>
          {quote.content}
        </Text>

        <Text
          c="white"
          fz={20}
          fw={600}
          ta="center"
          hiddenFrom="sm"
          style={style}
          className={text}>
          {quote.author}
        </Text>

        <Text
          c="white"
          fz={30}
          fw={600}
          ta="center"
          visibleFrom="sm"
          style={style}
          className={text}>
          {quote.content}
        </Text>

        <Text
          c="white"
          fz={30}
          fw={600}
          ta="center"
          visibleFrom="sm"
          style={style}
          className={text}>
          {quote.author}
        </Text>
      </Stack>

      <Space h={60} />
    </Stack>
  );
}
