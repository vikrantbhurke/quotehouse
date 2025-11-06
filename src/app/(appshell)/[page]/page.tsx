import { Space, Stack, Title } from "@mantine/core";

type PageProps = {
  params: Promise<{ page: string }>;
};

export default async function Page({ params }: PageProps) {
  const { page } = await params;
  console.log("Page", page);
  return (
    <>
      <Stack
        p="xl"
        h="100vh"
        justify="space-between"
        align="center"
        style={{ border: "1px solid red" }}>
        <Space h={60} />
        <Stack gap="xl">
          <Title order={3} ta="center">
            Always trade money for time and knowledge. Because money can be lost
            and gained. But time once lost cannot be gained. And knowledge once
            gained cannot be lost.
          </Title>

          <Title order={3} ta="center">
            Vikrant Bhurke
          </Title>
        </Stack>
        <Space h={60} />
      </Stack>
    </>
  );
}
