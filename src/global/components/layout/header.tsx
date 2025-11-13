"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { ButtonInstallApp } from "../common";
import { outfit } from "@/global/styles/fonts";
import { useWindowScroll } from "@mantine/hooks";
import { viewQuoteRoute } from "@/global/constants";
import { Box, Button, Group, ThemeIcon, Title } from "@mantine/core";

const group = `bg-white w-full max-w-3xl fixed top-0 z-100 border-b-[3px]`;

export function Header() {
  const router = useRouter();
  const [scroll] = useWindowScroll();

  const handleClick = () => router.push(viewQuoteRoute(1));

  const button = clsx(outfit.className, "antialiased");

  return (
    <Group
      h={60}
      px="xs"
      className={clsx(group, scroll.y > 0 ? "border-gray-200" : "border-white")}
      justify="space-between">
      <Group gap={8} onClick={handleClick}>
        <Box className="relative w-[33px] h-[33px]">
          <ThemeIcon
            size={33}
            radius="xl"
            bg="var(--tx-one)"
            className="absolute top-0 left-0"
          />

          <ThemeIcon
            size={10}
            radius="xl"
            bg="var(--tx-one)"
            style={{
              position: "absolute",
              bottom: "-5px",
              right: "-5px",
            }}
          />
        </Box>

        <Button
          p={0}
          fz="xl"
          c="var(--tx-one)"
          className={button}
          variant="transparent">
          Quotehouse
        </Button>
      </Group>

      <Group>
        <ButtonInstallApp />

        <Title
          fw={500}
          order={4}
          c="var(--tx-one)"
          className={clsx(button)}
          onClick={handleClick}>
          Home
        </Title>
      </Group>
    </Group>
  );
}
