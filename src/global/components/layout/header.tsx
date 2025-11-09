"use client";
import { Group, ThemeIcon } from "@mantine/core";
import { ButtonInstallApp } from "../common";
import { useWindowScroll } from "@mantine/hooks";
import clsx from "clsx";

const group = `bg-white w-full max-w-3xl fixed top-0 z-100 border-b-[3px]`;

export function Header() {
  const [scroll] = useWindowScroll();

  return (
    <Group
      h={60}
      p="xs"
      className={clsx(group, scroll.y > 0 ? "border-gray-200" : "border-white")}
      justify="space-between">
      <ThemeIcon bg="#333" size="lg" radius="xl" />

      <ButtonInstallApp />
    </Group>
  );
}
