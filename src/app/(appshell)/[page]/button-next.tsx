"use client";
import { ActionIcon } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import classes from "@/app/common.module.css";
import { opacity } from "@/app/tailwind";
import clsx from "clsx";

export function ButtonNext({ handleNext, color }: any) {
  return (
    <ActionIcon
      variant="white"
      size="lg"
      radius="xl"
      onClick={handleNext}
      className={clsx(classes.boxShadow, opacity)}>
      <IconArrowDown size={20} color={color} stroke={3} />
    </ActionIcon>
  );
}
