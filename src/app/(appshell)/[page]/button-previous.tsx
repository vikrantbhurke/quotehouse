"use client";
import { ActionIcon } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";
import clsx from "clsx";
import { opacity } from "@/app/tailwind";
import classes from "@/app/common.module.css";
import { useNavigate } from "./use-navigate";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { getRandomColor } from "./get-random-color";

export function ButtonPrevious({ total }: any) {
  const { decrement } = useNavigate(total);
  const { color } = useSelector((state: RootState) => state.global);

  const handlePrevious = () => {
    decrement();
    getRandomColor(color);
  };

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
