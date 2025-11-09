"use client";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { ActionIcon, Box } from "@mantine/core";
import { getZen, opacity } from "@/app/tailwind";
import { RootState } from "@/global/states/store";
import { IconArrowRight } from "@tabler/icons-react";
import classes from "@/global/styles/common.module.css";
import { useNavigate } from "@/global/hooks/use-navigate";

export function ButtonNext({ total }: any) {
  const { increment } = useNavigate(total);
  const { color, isZen } = useSelector((state: RootState) => state.global);

  const handleNext = () => {
    increment();
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
