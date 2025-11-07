import { Space, Stack, Text } from "@mantine/core";

export function ItemQuote({ quote }: any) {
  return (
    <Stack p="xl" h="100vh" justify="space-between" align="center">
      <Space h={60} />

      <Stack gap="xl">
        <Text fz={20} ta="center" hiddenFrom="sm">
          {quote.content}
        </Text>

        <Text fz={20} ta="center" hiddenFrom="sm">
          {quote.author}
        </Text>

        <Text fz={30} ta="center" visibleFrom="sm">
          {quote.content}
        </Text>

        <Text fz={30} ta="center" visibleFrom="sm">
          {quote.author}
        </Text>
      </Stack>

      <Space h={60} />
    </Stack>
  );
}
