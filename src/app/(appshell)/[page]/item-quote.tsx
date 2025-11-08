"use client";
import clsx from "clsx";
import { outfit } from "@/global/styles/fonts";
import { lighten, Space, Stack, Text } from "@mantine/core";
import classes from "@/app/common.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export function ItemQuote({ quote }: any) {
  const { color } = useSelector((state: RootState) => state.global);

  const text = clsx(
    outfit.className,
    "antialiased",
    classes.textShadow,
    "selection:bg-[var(--selection-bg)]"
  );

  return (
    <Stack p="xl" h="100vh" justify="space-between" align="center">
      <Space h={60} />

      <Stack gap="xl">
        <Text
          c="white"
          fz={20}
          fw={600}
          ta="center"
          hiddenFrom="sm"
          className={text}>
          {quote.content}
        </Text>

        <Text
          c="white"
          fz={20}
          fw={600}
          ta="center"
          hiddenFrom="sm"
          className={text}>
          {quote.author}
        </Text>

        <Text
          c="white"
          fz={30}
          fw={600}
          ta="center"
          visibleFrom="sm"
          style={{
            "--selection-bg": lighten(color, 0.5),
          }}
          className={text}>
          {quote.content}
        </Text>

        <Text
          c="white"
          fz={30}
          fw={600}
          ta="center"
          visibleFrom="sm"
          className={text}>
          {quote.author}
        </Text>
      </Stack>

      <Space h={60} />
    </Stack>
  );
}
