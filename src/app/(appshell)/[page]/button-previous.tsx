"use client";
import clsx from "clsx";
import { ActionIcon, Box } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { getZen, opacity } from "@/app/tailwind";
import classes from "@/app/common.module.css";
import { useNavigate } from "./use-navigate";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { getRandomColor } from "./get-random-color";

export function ButtonPrevious({ total }: any) {
  const { decrement } = useNavigate(total);
  const { color, isZen } = useSelector((state: RootState) => state.global);

  const handlePrevious = () => {
    decrement();
    getRandomColor(color);
  };

  return (
    <Box className={getZen(isZen)}>
      <ActionIcon
        variant="white"
        size="lg"
        radius="xl"
        onClick={handlePrevious}
        className={clsx(classes.boxShadow, opacity)}>
        <IconArrowLeft size={20} color={color} stroke={3} />
      </ActionIcon>
    </Box>
  );
}
