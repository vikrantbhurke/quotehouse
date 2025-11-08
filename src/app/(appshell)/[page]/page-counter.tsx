"use client";
import clsx from "clsx";
import { Box, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import classes from "@/app/common.module.css";
import { getZen, opacity } from "@/app/tailwind";
import { RootState } from "@/global/states/store";
import { outfit } from "@/global/styles/fonts";

export function PageCounter({ page, total }: any) {
  const { isZen } = useSelector((state: RootState) => state.global);

  const text = clsx(
    outfit.className,
    "antialiased",
    opacity,
    classes.textShadow,
    getZen(isZen)
  );

  return (
    <Box className={getZen(isZen)}>
      <Text fw={700} className={text}>
        {page} / {total}
      </Text>
    </Box>
  );
}
