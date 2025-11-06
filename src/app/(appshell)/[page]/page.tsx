import { Space, Stack, Title } from "@mantine/core";

export default async function Page() {
  return (
    <>
      <Stack p="xl" h="100vh" justify="space-between" align="center">
        <Space h={60} />
        <Stack gap="xl">
          <Title order={1} ta="center">
            Always trade money for time and knowledge. Because money can be lost
            and gained. But time once lost cannot be gained. And knowledge once
            gained cannot be lost.
          </Title>

          <Title order={1} ta="center">
            Vikrant Bhurke
          </Title>
        </Stack>
        <Space h={60} />
      </Stack>
    </>
  );
}
