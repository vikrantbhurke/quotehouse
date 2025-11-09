"use client";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { ActionIcon, Box } from "@mantine/core";
import { getZen, opacity } from "@/app/tailwind";
import { RootState } from "@/global/states/store";
import { IconArrowLeft } from "@tabler/icons-react";
import classes from "@/global/styles/common.module.css";
import { useNavigate } from "@/global/hooks/use-navigate";
import { useDispatch } from "react-redux";
import { setColor } from "@/global/states/global-slice";

export function ButtonPrevious({ total }: any) {
  const { decrement } = useNavigate(total);
  const { color, isZen } = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();

  const handlePrevious = () => {
    decrement();
    dispatch(setColor());
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
