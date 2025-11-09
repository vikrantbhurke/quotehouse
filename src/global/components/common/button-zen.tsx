"use client";
import clsx from "clsx";
import { opacity } from "@/app/tailwind";
import { ActionIcon } from "@mantine/core";
import { RootState } from "@/global/states/store";
import { IconPointFilled } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import classes from "@/global/styles/common.module.css";
import { setIsZen } from "@/global/states/global-slice";

export function ButtonZen() {
  const dispatch = useDispatch();
  const { color, isZen } = useSelector((state: RootState) => state.global);

  const zenOn = () => dispatch(setIsZen(true));
  const zenOff = () => dispatch(setIsZen(false));

  return (
    <ActionIcon
      size="lg"
      radius="xl"
      onClick={isZen ? zenOff : zenOn}
      variant={isZen ? "transparent" : "white"}
      className={clsx(!isZen && classes.boxShadow, opacity)}>
      <IconPointFilled size={30} color={isZen ? "white" : color} stroke={3} />
    </ActionIcon>
  );
}
