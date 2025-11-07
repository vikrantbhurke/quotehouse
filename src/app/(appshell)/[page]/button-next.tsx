"use client";
import { ActionIcon } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";

export function ButtonNext({ handleNext, color }: any) {
  return (
    <ActionIcon
      variant="white"
      size="lg"
      radius="xl"
      onClick={handleNext}
      className="opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out">
      <IconArrowDown size={20} color={color} stroke={3} />
    </ActionIcon>
  );
}
