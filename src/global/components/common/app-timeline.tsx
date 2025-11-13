import clsx from "clsx";
import { outfit } from "@/global/styles/fonts";
import { Text, Title, Stack, Timeline, TimelineItem } from "@mantine/core";

const text = clsx(outfit.className, "antialiased");
const fw600 = "font-semibold";
const taCenter = "text-center";
const h1 = clsx(taCenter, text);

export function AppTimeline() {
  return (
    <Stack align="center">
      <Title order={1} className={h1}>
        Timeline
      </Title>

      <Timeline
        active={0}
        color="var(--mantine-color-dark-6)"
        bulletSize={50}
        lineWidth={10}>
        <TimelineItem
          bullet={
            <Title order={5} c="white" className={text}>
              1K
            </Title>
          }
          title={
            <Text fz={24} fw={600}>
              Day 0: Launch
            </Text>
          }>
          <Text c="var(--mantine-color-gray-6)" size="md" className={fw600}>
            Quotehouse website lauched with 1000 quotes.
          </Text>
          <Text
            c="var(--mantine-color-gray-4)"
            size="sm"
            mt={4}
            className={fw600}>
            10th November, 2025
          </Text>
        </TimelineItem>

        <TimelineItem
          bullet={
            <Title order={5} c="black" className={text}>
              10K
            </Title>
          }
          title={
            <Text fz={24} fw={600}>
              Someday
            </Text>
          }>
          <Text c="var(--mantine-color-gray-6)" size="md" className={fw600}>
            Submit quotes and help {process.env.NEXT_PUBLIC_APP_NAME} reach this
            milestone.
          </Text>

          {/* <Text c="var(--mantine-color-gray-6)" size="md" className={fw600}>
            Quotehouse hit 10000 quotes in its datebase. Thanks to the global
            community.
          </Text> */}

          {/* <Text c="var(--mantine-color-gray-4)" size="sm" mt={4} className={fw600}>
            1st January, 2026
          </Text> */}
        </TimelineItem>
      </Timeline>
    </Stack>
  );
}
