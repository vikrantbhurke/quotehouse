"use client";
import { ActionIcon } from "@mantine/core";
import { IconTriangleFilled } from "@tabler/icons-react";

export function ButtonPrevious({ handlePrevious }: any) {
  return (
    <ActionIcon
      size={40}
      onClick={handlePrevious}
      variant="transparent"
      className="hover:opacity-75 transition-opacity duration-300 ease-in-out">
      <IconTriangleFilled size={40} color="white" />
    </ActionIcon>
  );
}
