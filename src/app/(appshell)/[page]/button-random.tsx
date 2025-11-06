"use client";
import { ActionIcon } from "@mantine/core";
import { IconSquareRotatedFilled } from "@tabler/icons-react";

export function ButtonRandom() {
  return (
    <ActionIcon
      variant="transparent"
      size={40}
      className="hover:opacity-75 transition-opacity duration-300 ease-in-out">
      <IconSquareRotatedFilled size={40} color="white" />
    </ActionIcon>
  );
}
