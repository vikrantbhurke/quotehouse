"use client";
import { ActionIcon } from "@mantine/core";
import { IconTriangleFilled } from "@tabler/icons-react";

export function ButtonPrevious() {
  return (
    <ActionIcon
      variant="transparent"
      size={40}
      className="hover:opacity-75 transition-opacity duration-300 ease-in-out">
      <IconTriangleFilled size={40} color="white" />
    </ActionIcon>
  );
}
