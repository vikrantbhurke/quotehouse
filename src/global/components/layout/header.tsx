import { Group, ThemeIcon } from "@mantine/core";
import { ButtonInstallApp } from "../common";

const group = `bg-white w-full max-w-3xl fixed top-0 z-100`;

export function Header() {
  return (
    <Group h={60} p="xs" className={group} justify="space-between">
      <ThemeIcon bg="#333" size="lg" radius="xl" />

      <ButtonInstallApp />
    </Group>
  );
}
