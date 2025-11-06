"use client";
import { Group, ThemeIcon, Title } from "@mantine/core";
import { IconCircleFilled } from "@tabler/icons-react";

export function ButtonLogo() {
  return (
    <Group
      gap={8}
      onClick={() => console.log("/1")}
      className="hover:opacity-75 transition-opacity duration-300 ease-in-out">
      <ThemeIcon size={40} variant="transparent">
        <IconCircleFilled size={40} color="white" />
      </ThemeIcon>

      <Title order={3}>Quotehouse</Title>
    </Group>
  );
}
