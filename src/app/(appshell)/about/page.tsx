import {
  Text,
  Space,
  Title,
  Stack,
  Button,
  Divider,
  Textarea,
  Timeline,
  TextInput,
  TimelineItem,
} from "@mantine/core";
import clsx from "clsx";
import { outfit } from "@/global/styles/fonts";

const text = clsx(outfit.className, "antialiased");
const border = { border: "3px solid #EEE" };
const fw600 = "font-semibold";
const taCenter = "text-center";
const h1 = clsx(taCenter, text);

export default function Page() {
  return (
    <Stack gap={60} p="xl">
      <About />
      <Divider size="md" />
      <FormContact />
      <Divider size="md" />
      <QuotesTimeline />
    </Stack>
  );
}

function About() {
  return (
    <Stack>
      <Title order={1} className={h1}>
        About
      </Title>

      <Text fz={20}>
        Hello world! I&apos;m Vikrant. Like you, I doom scroll through apps
        every day. Most of what I see is mental junk food; tasty, cheap, and
        harmless in small doses, but unhealthy over time. Sometimes I switch to
        a better diet; books, podcasts, tutorials. That&apos;s the good stuff;
        protein, vitamins, fiber. I built this app to swap the junk snack for
        the healthier one. Fries for fruit. Nachos for nuts. Biscuits for
        berries.
      </Text>

      <Text fz={20}>
        There are other quote sites out there. They have more quotes, more
        filters, more speed. I&apos;m not competing with them. I&apos;m building
        a space where insight meets design; a place to get my daily fix of
        meaningful thoughts in a calm, beautiful way. The database is growing by
        hand, one quote at a time. You can help. Submit quotes you think belong
        here. I read, verify, and add the best ones.
      </Text>

      <Text fz={20}>You’re welcome.</Text>
    </Stack>
  );
}

function FormContact() {
  return (
    <Stack>
      <Title order={1} className={h1}>
        Contact
      </Title>

      <Textarea
        label={
          <Text fz={24} fw={600}>
            Quote
          </Text>
        }
        fw={600}
        size="xl"
        autosize
        radius="lg"
        minRows={2}
        maxRows={4}
        className={text}
        styles={{ input: border }}
        classNames={{ input: text }}
        placeholder="An awesome quote"
      />

      <TextInput
        label={
          <Text fz={24} fw={600}>
            Author
          </Text>
        }
        fw={600}
        size="xl"
        radius="lg"
        className={text}
        styles={{ input: border }}
        placeholder="Author's name"
        classNames={{ input: text }}
      />

      <TextInput
        label={
          <Text fz={24} fw={600}>
            Citation
          </Text>
        }
        fw={600}
        size="xl"
        radius="lg"
        className={text}
        styles={{ input: border }}
        classNames={{ input: text }}
        placeholder="Source link or notes where you found the quote"
      />

      <Space />

      <Button variant="filled" radius="lg" size="xl" color="var(--tx-one)">
        <Text c="white" fz={24} fw={600}>
          Send
        </Text>
      </Button>
    </Stack>
  );
}

export function QuotesTimeline() {
  return (
    <Stack pb="xl" align="center">
      <Title order={1} className={h1}>
        Timeline
      </Title>

      <Timeline active={0} color="var(--tx-one)" bulletSize={50} lineWidth={10}>
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
          <Text c="var(--tx-two)" size="md" className={fw600}>
            Quotehouse website lauched with 1000 quotes.
          </Text>
          <Text c="var(--tx-three)" size="sm" mt={4} className={fw600}>
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
          <Text c="var(--tx-two)" size="md" className={fw600}>
            Submit quotes and help {process.env.NEXT_PUBLIC_APP_NAME} reach this
            milestone.
          </Text>

          {/* <Text c="var(--tx-two)" size="md" className={fw600}>
            Quotehouse hit 10000 quotes in its datebase. Thanks to the global
            community.
          </Text> */}

          {/* <Text c="var(--tx-three)" size="sm" mt={4} className={fw600}>
            1st January, 2026
          </Text> */}
        </TimelineItem>
      </Timeline>
    </Stack>
  );
}
