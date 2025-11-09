import clsx from "clsx";
import {
  Text,
  Title,
  Stack,
  Textarea,
  Button,
  TextInput,
  Select,
  TimelineItem,
  Timeline,
  Space,
} from "@mantine/core";
import { outfit } from "@/global/styles/fonts";

const text = clsx(outfit.className, "antialiased");

export default function Page() {
  return (
    <Stack gap={60} p="lg">
      <Stack>
        <Title ta="center" order={1} c="#333" fw={600} className={text}>
          Hello World
        </Title>

        <Text c="#333" fz={24} fw={600} className={text}>
          I&apos;m Vikrant. I&apos;m addicted to doom scroll social media
          everyday just like you are. The content I consume is mostly mental
          junk food. It&apos;s tasty, cheap and even safe in small dosage. But
          it&apos;s unhealthy and unnecessary. I also and less frequently read
          books, watch tutorials and listen to podcasts. That&apos;s a healthier
          diet. Protein, complex carbs, fibre. I made this app to replace some
          of the former with the later. Fries with fruits. Nachos with nuts.
          Biscuits with berries. I am also manually and continually growing the
          quotes database. You&apos;re welcome to help me too. I read, verify
          and add qualified quotes to the database. You can submit quotes you
          think should be on this app with the form below.
        </Text>
      </Stack>

      <Stack>
        <Title ta="center" order={1} c="#333" fw={600} className={text}>
          Contact
        </Title>

        <Textarea
          radius="lg"
          size="xl"
          label={
            <Text c="#333" fz={24} fw={600} className={text}>
              Message
            </Text>
          }
          placeholder="Input placeholder"
          autosize
          minRows={2}
          maxRows={4}
          styles={{ input: { border: "3px solid #EEE" } }}
          c="#333"
          fw={600}
          className={text}
        />

        <TextInput
          radius="lg"
          size="xl"
          label={
            <Text c="#333" fz={24} fw={600} className={text}>
              Author
            </Text>
          }
          placeholder="Say something"
          styles={{ input: { border: "3px solid #EEE" } }}
          c="#333"
          fw={600}
          className={text}
        />

        <Select
          radius="lg"
          size="xl"
          c="#333"
          fw={600}
          className={text}
          label={
            <Text c="#333" fz={24} fw={600} className={text}>
              Reason
            </Text>
          }
          classNames={{
            dropdown: text,
          }}
          styles={{
            dropdown: { border: "3px solid #EEE" },
            input: { border: "3px solid #EEE" },
          }}
          placeholder="Pick value"
          data={["React", "Angular", "Vue", "Svelte"]}
        />

        <Space />

        <Button variant="filled" radius="lg" size="xl" color="#333">
          <Text fz={24} fw={600} className={text}>
            Send
          </Text>
        </Button>
      </Stack>

      <QuotesTimeline />
    </Stack>
  );
}

export function QuotesTimeline() {
  return (
    <Stack pb="xl" align="center">
      <Title ta="center" order={1} c="#333" fw={600} className={text}>
        Timeline
      </Title>

      <Timeline active={1} bulletSize={50} lineWidth={5} className={text}>
        <TimelineItem
          bullet={"1K"}
          title={
            <Text c="#333" fz={24} fw={600} className={text}>
              Day 0: Launch
            </Text>
          }>
          <Text c="#666" size="md" fw={600} className={text}>
            Quotehouse website lauched with 1000 quotes
          </Text>
          <Text c="#666" size="md" mt={4} fw={600}>
            10th November, 2025
          </Text>
        </TimelineItem>

        <TimelineItem
          bullet={"10K"}
          title={
            <Text c="#333" fz={24} fw={600} className={text}>
              Day 123: Launch
            </Text>
          }>
          <Text c="#666" size="md" fw={600} className={text}>
            Quotehouse hit 10000 quotes in its datebase. Thanks to the global
            community.
          </Text>
          <Text c="#666" size="md" mt={4} fw={600}>
            1st January, 2026
          </Text>
        </TimelineItem>

        <TimelineItem
          bullet={"100K"}
          title={
            <Text c="#333" fz={24} fw={600} className={text}>
              Day 478: Launch
            </Text>
          }>
          <Text c="#666" size="md" fw={600} className={text}>
            Quotehouse hit 10000 quotes in its datebase. Thanks to the global
            community.
          </Text>
          <Text c="#666" size="md" mt={4} fw={600}>
            1st January, 2026
          </Text>
        </TimelineItem>
      </Timeline>
    </Stack>
  );
}
