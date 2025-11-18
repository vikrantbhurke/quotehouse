import { outfit } from "@/global/styles/fonts";
import { Alert, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import clsx from "clsx";

const text = clsx(outfit.className, "antialiased");

export function AlterQuoteCitation() {
  return (
    <Alert
      radius="md"
      color="gray"
      variant="light"
      title={
        <Title order={4} className={text} c="black">
          Points To Consider For Citing Quotes
        </Title>
      }
      icon={
        <ThemeIcon size={28} variant="transparent" c="black">
          <IconInfoCircle size={28} />
        </ThemeIcon>
      }>
      <Stack>
        <Text fz={18}>
          1) Quote already existing in our database, even the one that
          don&apos;t match verbatim but roughly in terms of meaning will be
          rejected.
        </Text>
        <Text fz={18}>
          2) Quote should actually be meaningful, not simply something someone
          famous said sometime.
        </Text>
        <Text fz={18}>
          3) Quote length can be anything but generally shorter the better.
        </Text>
        <Text fz={18}>
          4) Quote that is funny or poetic or rhythmic, but lacking some
          inherent logical or practical meaning will be rejected.
        </Text>
      </Stack>
    </Alert>
  );
}
