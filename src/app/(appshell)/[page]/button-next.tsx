"use client";
import clsx from "clsx";
import { ActionIcon, Box } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import classes from "@/app/common.module.css";
import { getZen, opacity } from "@/app/tailwind";
import { useNavigate } from "./use-navigate";
import { RootState } from "@/global/states/store";
import { useSelector } from "react-redux";
import { getRandomColor } from "./get-random-color";

export function ButtonNext({ total }: any) {
  const { increment } = useNavigate(total);
  const { color, isZen } = useSelector((state: RootState) => state.global);

  const handleNext = () => {
    increment();
    getRandomColor(color);
  };

  return (
    <Box className={getZen(isZen)}>
      <ActionIcon
        variant="white"
        size="lg"
        radius="xl"
        onClick={handleNext}
        className={clsx(classes.boxShadow, opacity)}>
        <IconArrowDown size={20} color={color} stroke={3} />
      </ActionIcon>
    </Box>
  );
}
