import clsx from "clsx";
import { outfit } from "@/global/styles/fonts";
import { Stack, Text, Title } from "@mantine/core";

const title = clsx(outfit.className, "antialiased", "text-center");

export function About() {
  return (
    <Stack>
      <Title order={1} className={title}>
        About
      </Title>

      <Text fz={20}>
        Hello world! I&apos;m Vikrant. Like you, I doom scroll through apps
        every day. Most of what I see is mental junk food; tasty, cheap, and
        harmless in small doses, but unhealthy over time. Sometimes I switch to
        a better diet; books, podcasts, tutorials. That&apos;s the good stuff;
        protein, vitamins, fiber. I&apos;m building Quotehouse to swap some of
        the junk food for the healthier one. Fries for fruit. Nachos for nuts.
        Biscuits for berries.
      </Text>

      <Text fz={20}>
        There are other quote sites out there. They have more quotes, more
        filters, more speed. I&apos;m not competing with them. I&apos;m building
        this app as a hobby project to get my daily fix of insightful thoughts
        in an easy and fun way. I hope you get it as well. The database is
        growing by hand, one quote at a time. You can help me grow it. Submit
        quotes you think belong here. I read, verify, and add the best ones.
      </Text>

      <Text fz={20}>You&apos;re welcome.</Text>
    </Stack>
  );
}
