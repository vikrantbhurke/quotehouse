"use client";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { ActionIcon, Box } from "@mantine/core";
import { getZen, opacity } from "@/app/tailwind";
import { RootState } from "@/global/states/store";
import classes from "@/global/styles/common.module.css";
import { IconArrowsShuffle } from "@tabler/icons-react";
import { useNavigate } from "@/global/hooks/use-navigate";

export function ButtonShuffle({ total }: any) {
  const { shuffle } = useNavigate(total);
  const { color, isZen } = useSelector((state: RootState) => state.global);

  const handleShuffle = () => {
    shuffle();
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
