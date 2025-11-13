"use client";
import {
  IconBrandX,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandInstagram,
} from "@tabler/icons-react";
import clsx from "clsx";
import { outfit } from "@/global/styles/fonts";
import { ActionIcon, Group, Stack, Title } from "@mantine/core";
import Link from "next/link";

const title = clsx(outfit.className, "antialiased", "text-center");

export function SocialLinks() {
  return (
    <Stack>
      <Title order={5} className={title}>
        Connect with Vikrant
      </Title>
      <Group justify="center">
        <ActionIcon
          size="xl"
          radius="xl"
          component={Link}
          bg="var(--mantine-color-dark-6)"
          target="_blank"
          href="https://x.com/vikrantbhurke">
          <IconBrandX />
        </ActionIcon>

        <ActionIcon
          size="xl"
          radius="xl"
          component={Link}
          bg="var(--mantine-color-dark-6)"
          target="_blank"
          href="https://www.linkedin.com/in/vikrant-bhurke-16726335a/">
          <IconBrandLinkedin />
        </ActionIcon>

        <ActionIcon
          size="xl"
          radius="xl"
          component={Link}
          bg="var(--mantine-color-dark-6)"
          target="_blank"
          href="https://t.me/vikrantbhurke">
          <IconBrandTelegram />
        </ActionIcon>

        <ActionIcon
          size="xl"
          radius="xl"
          component={Link}
          bg="var(--mantine-color-dark-6)"
          target="_blank"
          href="https://www.instagram.com/vikbhurke11/">
          <IconBrandInstagram />
        </ActionIcon>
      </Group>
    </Stack>
  );
}
