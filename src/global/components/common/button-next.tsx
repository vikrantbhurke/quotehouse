"use client";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { ActionIcon, Box } from "@mantine/core";
import { getZen, opacity } from "@/app/tailwind";
import { RootState } from "@/global/states/store";
import { IconArrowRight } from "@tabler/icons-react";
import classes from "@/global/styles/common.module.css";
import { useNavigate } from "@/global/hooks/use-navigate";
import { useDispatch } from "react-redux";
import { setColor } from "@/global/states/global-slice";

export function ButtonNext({ total }: any) {
  const { increment } = useNavigate(total);
  const { color, isZen } = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();

  const handleNext = () => {
    increment();
    dispatch(setColor());
  };

  return (
    <Box className={getZen(isZen)}>
      <ActionIcon
        variant="white"
        size="lg"
        radius="xl"
        onClick={handleNext}
        className={clsx(classes.boxShadow, opacity)}>
        <IconArrowRight size={20} color={color} stroke={3} />
      </ActionIcon>
    </Box>
  );
}
