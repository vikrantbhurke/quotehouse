"use client";
import { ActionIcon } from "@mantine/core";
import { IconTriangleInvertedFilled } from "@tabler/icons-react";

export function ButtonNext() {
  return (
    <ActionIcon variant="transparent" size={40}>
      <IconTriangleInvertedFilled size={40} color="white" />
    </ActionIcon>
  );
}
