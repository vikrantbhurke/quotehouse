"use client";
import { outfit } from "@/global/styles/fonts";
import { ActionIcon, Group, Title } from "@mantine/core";

export function ButtonLogo() {
  return (
    <Group
      gap={8}
      onClick={() => console.log("/1")}
      className={`${outfit.className} antialiased opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out`}>
      <ActionIcon variant="white" size="lg" radius="xl" onClick={() => {}} />

      <Title order={4} hiddenFrom="sm">
        Quotehouse
      </Title>

      <Title order={3} visibleFrom="sm">
        Quotehouse
      </Title>
    </Group>
  );
}
