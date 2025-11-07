"use client";
import { ActionIcon } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";
import clsx from "clsx";
import { opacity } from "@/app/tailwind";
import classes from "@/app/common.module.css";

export function ButtonPrevious({ handlePrevious, color }: any) {
  return (
    <ActionIcon
      variant="white"
      size="lg"
      radius="xl"
      onClick={handlePrevious}
      className={clsx(classes.boxShadow, opacity)}>
      <IconArrowUp size={20} color={color} stroke={3} />
    </ActionIcon>
  );
}
