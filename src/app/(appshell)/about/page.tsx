import clsx from "clsx";
import {
  Text,
  Title,
  Stack,
  Textarea,
  Button,
  TextInput,
  Divider,
  TimelineItem,
  Timeline,
  Space,
} from "@mantine/core";
import { outfit } from "@/global/styles/fonts";

const text = clsx(outfit.className, "antialiased");

export default function Page() {
  return (
    <Stack gap={60} p="xl">
      <Stack>
        <Title ta="center" order={1} c="#333" fw={900} className={text}>
          About
        </Title>

        <Text c="#333" fz={20} fw={400} className={text}>
          Hello world! I&apos;m Vikrant. Like you, I doom scroll through apps
          every day. Most of what I see is mental junk food; tasty, cheap, and
          harmless in small doses, but unhealthy over time. Sometimes I switch
          to a better diet; books, podcasts, tutorials. That&apos;s the good
          stuff; protein, vitamins, fiber. I built this app to swap the junk
          snack for the healthier one. Fries for fruit. Nachos for nuts.
          Biscuits for berries.
        </Text>

        <Text c="#333" fz={20} fw={400} className={text}>
          There are other quote sites out there. They have more quotes, more
          filters, more speed. I&apos;m not competing with them. I&apos;m
          building a space where insight meets design; a place to get my daily
          fix of meaningful thoughts in a calm, beautiful way. The database is
          growing by hand, one quote at a time. You can help. Submit quotes you
          think belong here. I read, verify, and add the best ones.
        </Text>

        <Text c="#333" fz={20} fw={400} className={text}>
          You’re welcome.
        </Text>
      </Stack>

      <Divider size="md" />

      <Stack>
        <Title ta="center" order={1} c="#333" fw={900} className={text}>
          Contact
        </Title>

        <Textarea
          radius="lg"
          size="xl"
          label={
            <Text c="#333" fz={24} fw={600} className={text}>
              Quote
            </Text>
          }
          placeholder="Some awesome quote"
          autosize
          minRows={2}
          maxRows={4}
          styles={{
            input: {
              border: "3px solid #EEE",
            },
          }}
          c="#333"
          fw={600}
          classNames={{
            input: text,
          }}
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
          placeholder="Author's name"
          styles={{ input: { border: "3px solid #EEE" } }}
          c="#333"
          fw={600}
          classNames={{
            input: text,
          }}
          className={text}
        />

        {/* <Select
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
            option: text,
            // dropdown: text,
            input: text,
          }}
          styles={{
            dropdown: {
              border: "3px solid #EEE",
              borderRadius: 20,
            },
            input: { border: "3px solid #EEE" },
          }}
          placeholder="Pick value"
          data={[
            "Submit a quote",
            "Report a bug",
            "Make a suggestion",
            "Ask a question",
            "Request a feature",
          ]}
        /> */}

        <Space />

        <Button variant="filled" radius="lg" size="xl" color="#333">
          <Text fz={24} fw={600} className={text}>
            Send
          </Text>
        </Button>
      </Stack>

      <Divider size="md" />

      <QuotesTimeline />
    </Stack>
  );
}

export function QuotesTimeline() {
  return (
    <Stack pb="xl" align="center">
      <Title ta="center" order={1} c="#333" fw={900} className={text}>
        Timeline
      </Title>

      <Timeline
        active={1}
        color="gray"
        bulletSize={50}
        lineWidth={10}
        className={text}>
        <TimelineItem
          bullet={
            <Title order={5} className={text}>
              1K
            </Title>
          }
          title={
            <Text c="#333" fz={24} fw={600} className={text}>
              Day 0: Launch
            </Text>
          }>
          <Text c="#888" size="md" fw={600} className={text}>
            Quotehouse website lauched with 1000 quotes.
          </Text>
          <Text c="#bbb" size="md" mt={4} fw={600}>
            10th November, 2025
          </Text>
        </TimelineItem>

        <TimelineItem
          bullet={
            <Title order={5} className={text}>
              10K
            </Title>
          }
          title={
            <Text c="#333" fz={24} fw={600} className={text}>
              Day 123
            </Text>
          }>
          <Text c="#888" size="md" fw={600} className={text}>
            Quotehouse hit 10000 quotes in its datebase. Thanks to the global
            community.
          </Text>
          <Text c="#bbb" size="md" mt={4} fw={600}>
            1st January, 2026
          </Text>
        </TimelineItem>

        <TimelineItem
          bullet={
            <Title order={5} className={text}>
              100K
            </Title>
          }
          title={
            <Text c="#333" fz={24} fw={600} className={text}>
              Day ???
            </Text>
          }>
          <Text c="#888" size="md" fw={600} className={text}>
            Help us reach this milestone sooner.
          </Text>
          <Text c="#bbb" size="md" mt={4} fw={600}>
            31st June, 2026
          </Text>
        </TimelineItem>
      </Timeline>
    </Stack>
  );
}
