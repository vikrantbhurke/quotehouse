import { outfit } from "@/global/styles/fonts";
import { Stack, Text, Title } from "@mantine/core";
import clsx from "clsx";

const text = clsx(outfit.className, "antialiased");

export function AlterQuoteCitation() {
  return (
    <Stack
      p="xl"
      style={{
        backgroundColor: "var(--mantine-color-yellow-1)",
        borderRadius: 20,
      }}>
      <Title order={4} className={text} c="black">
        Points To Consider For Citing Quotes
      </Title>

      <Text fz={18}>
        1) Quote already existing in our database, even the one that don&apos;t
        match verbatim but roughly in terms of meaning, will be rejected.
      </Text>
      <Text fz={18}>
        2) Quote should actually be meaningful, not simply something someone
        famous said sometime.
      </Text>
      <Text fz={18}>
        3) Quote length can be anything but generally shorter the better.
      </Text>
      <Text fz={18}>
        4) Quote that is funny or poetic or rhythmic, but lacking some inherent
        logical or practical meaning will be rejected.
      </Text>
    </Stack>
  );
}
