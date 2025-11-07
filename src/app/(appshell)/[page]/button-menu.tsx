"use client";
import { ActionIcon, Group, Space } from "@mantine/core";
import { IconMenu4 } from "@tabler/icons-react";

export function ButtonMenu({ color }: any) {
  return (
    <Group>
      <Space w={50} />

      <ActionIcon
        variant="white"
        size="lg"
        radius="xl"
        onClick={() => {}}
        className="opacity-40 hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <IconMenu4 size={20} color={color} stroke={3} />
      </ActionIcon>
    </Group>
  );
}
