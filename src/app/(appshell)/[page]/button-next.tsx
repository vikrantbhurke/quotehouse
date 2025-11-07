"use client";
import { ActionIcon } from "@mantine/core";
import { IconTriangleInvertedFilled } from "@tabler/icons-react";

export function ButtonNext({ handleNext }: any) {
  return (
    <ActionIcon
      size={40}
      onClick={handleNext}
      variant="transparent"
      className="hover:opacity-75 transition-opacity duration-300 ease-in-out">
      <IconTriangleInvertedFilled size={40} color="white" />
    </ActionIcon>
  );
}
