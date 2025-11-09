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
    <Stack gap={60} p="xl">
      <Stack>
        <Title ta="center" order={1} c="#333" fw={900} className={text}>
          Hello World
        </Title>

        <Text c="#333" fz={20} fw={400} className={text}>
          I&apos;m Vikrant. Addicted to doom scroll some app everyday just like
          you are. The content I consume on those apps is mostly mental junk
          food. It&apos;s tasty, cheap and even safe in small dosage. But
          it&apos;s unhealthy and unnecessary. I also but less frequently read
          books, watch tutorials and listen to podcasts. That&apos;s a lot
          healthier diet. Protein, complex carbs, fibre. I made this app to
          replace some of the former with the later. Fries with fruits. Nachos
          with nuts. Biscuits with berries. I know there exist alternate
          websites who have more quotes, have more ways to filter and search
          them and add more quotes faster in their database. I&apos;m not
          competing with them. I&apos;m simply built a site / app where I can
          get my daily fix of insightful thoughts in easy and aesthetically
          pleasing way. Something I couldn&apos;t find on the internet until I
          made this app. I am also manually and continually growing the quotes
          database. You&apos;re welcome to help me do that. You can submit
          quotes you think should be on this app with the form below. I read,
          verify and add qualified quotes to the database.
        </Text>
      </Stack>

      <Stack>
        <Title ta="center" order={1} c="#333" fw={900} className={text}>
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
          placeholder="Say something"
          styles={{ input: { border: "3px solid #EEE" } }}
          c="#333"
          fw={600}
          classNames={{
            input: text,
          }}
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
      <Title ta="center" order={1} c="#333" fw={900} className={text}>
        Timeline
      </Title>

      <Timeline
        active={1}
        color="violet"
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
            Quotehouse website lauched with 1000 quotes
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
