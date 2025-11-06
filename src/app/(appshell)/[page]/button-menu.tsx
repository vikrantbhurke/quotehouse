"use client";
import { ActionIcon } from "@mantine/core";
import { IconSquareFilled } from "@tabler/icons-react";

export function ButtonMenu() {
  return (
    <ActionIcon
      variant="transparent"
      size={40}
      className="hover:opacity-75 transition-opacity duration-300 ease-in-out">
      <IconSquareFilled size={40} color="white" />
    </ActionIcon>
  );
}
