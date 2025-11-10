import { Stack, Divider } from "@mantine/core";
import { FormCiteQuote } from "@/features/cited-quote/views";
import { About, AppTimeline, SocialLinks } from "@/global/components/common";

export default function Page() {
  return (
    <Stack gap={60} p="xl">
      <About />
      <Divider size="md" />
      <FormCiteQuote />
      <Divider size="md" />
      <AppTimeline />
      <Divider size="md" />
      <SocialLinks />
    </Stack>
  );
}
