"use client";
import clsx from "clsx";
import { opacity } from "@/app/tailwind";
import classes from "@/app/common.module.css";
import { ActionIcon } from "@mantine/core";
import { IconArrowsShuffle } from "@tabler/icons-react";
import { useNavigate } from "./use-navigate";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { getRandomColor } from "./get-random-color";

export function ButtonShuffle({ total }: any) {
  const { shuffle } = useNavigate(total);
  const { color } = useSelector((state: RootState) => state.global);

  const handleShuffle = () => {
    shuffle();
    getRandomColor(color);
  };

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
