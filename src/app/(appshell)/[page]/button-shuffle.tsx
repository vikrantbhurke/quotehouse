"use client";
import clsx from "clsx";
import { opacity } from "@/app/tailwind";
import classes from "@/app/common.module.css";
import { ActionIcon } from "@mantine/core";
import { IconArrowsShuffle } from "@tabler/icons-react";

export function ButtonShuffle({ handleShuffle, color }: any) {
  return (
    <ActionIcon
      variant="white"
      size="lg"
      radius="xl"
      onClick={handleShuffle}
      className={clsx(classes.boxShadow, opacity)}>
      <IconArrowsShuffle size={20} color={color} stroke={3} />
    </ActionIcon>
  );
}
