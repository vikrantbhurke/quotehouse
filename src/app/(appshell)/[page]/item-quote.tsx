import { outfit } from "@/global/styles/fonts";
import { Space, Stack, Text } from "@mantine/core";
import classes from "@/app/common.module.css";

export function ItemQuote({ quote }: any) {
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
          className={`${outfit.className} antialiased ${classes.textShadow}`}>
          {quote.content}
        </Text>

        <Text
          c="white"
          fz={20}
          fw={600}
          ta="center"
          hiddenFrom="sm"
          className={`${outfit.className} antialiased ${classes.textShadow}`}>
          {quote.author}
        </Text>

        <Text
          c="white"
          fz={30}
          fw={600}
          ta="center"
          visibleFrom="sm"
          className={`${outfit.className} antialiased ${classes.textShadow}`}>
          {quote.content}
        </Text>

        <Text
          c="white"
          fz={30}
          fw={600}
          ta="center"
          visibleFrom="sm"
          className={`${outfit.className} antialiased ${classes.textShadow}`}>
          {quote.author}
        </Text>
      </Stack>

      <Space h={60} />
    </Stack>
  );
}
