"use client";
import { ActionIcon } from "@mantine/core";
import { IconArrowsShuffle } from "@tabler/icons-react";

export function ButtonShuffle({ handleShuffle, color }: any) {
  return (
    <ActionIcon
      variant="white"
      size="lg"
      radius="xl"
      onClick={handleShuffle}
      className="opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out">
      <IconArrowsShuffle size={20} color={color} stroke={3} />
    </ActionIcon>
  );
}
