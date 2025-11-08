"use client";
import clsx from "clsx";
import { getZen, opacity } from "@/app/tailwind";
import classes from "@/app/common.module.css";
import { ActionIcon, Box } from "@mantine/core";
import { IconArrowsShuffle } from "@tabler/icons-react";
import { useNavigate } from "./use-navigate";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { getRandomColor } from "./get-random-color";

export function ButtonShuffle({ total }: any) {
  const { shuffle } = useNavigate(total);
  const { color, isZen } = useSelector((state: RootState) => state.global);

  const handleShuffle = () => {
    shuffle();
    getRandomColor(color);
  };

  return (
    <Box className={getZen(isZen)}>
      <ActionIcon
        variant="white"
        size="lg"
        radius="xl"
        onClick={handleShuffle}
        className={clsx(classes.boxShadow, opacity)}>
        <IconArrowsShuffle size={20} color={color} stroke={3} />
      </ActionIcon>
    </Box>
  );
}
