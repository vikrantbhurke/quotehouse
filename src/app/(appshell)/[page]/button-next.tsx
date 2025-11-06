"use client";
import { ActionIcon } from "@mantine/core";
import { IconTriangleInvertedFilled } from "@tabler/icons-react";

export function ButtonNext() {
  return (
    <ActionIcon
      variant="transparent"
      size={40}
      className="hover:opacity-75 transition-opacity duration-300 ease-in-out">
      <IconTriangleInvertedFilled size={40} color="white" />
    </ActionIcon>
  );
}
