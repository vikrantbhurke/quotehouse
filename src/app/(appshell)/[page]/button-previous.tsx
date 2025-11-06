"use client";
import { ActionIcon } from "@mantine/core";
import { IconTriangleFilled } from "@tabler/icons-react";

export function ButtonPrevious() {
  return (
    <ActionIcon variant="transparent" size={40}>
      <IconTriangleFilled size={40} color="white" />
    </ActionIcon>
  );
}
