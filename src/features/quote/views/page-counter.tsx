"use client";
import clsx from "clsx";
import { Box, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import { outfit } from "@/global/styles/fonts";
import { getZen } from "@/global/styles/tailwind";
import { RootState } from "@/global/states/store";
import { textShadow } from "@/global/styles/styles";

export function PageCounter({ page, total, color }: any) {
  const { isZen } = useSelector((state: RootState) => state.global);

  const text = clsx(outfit.className, "antialiased", getZen(isZen));

  return (
    <Box className={getZen(isZen)}>
      <Text c="white" fw={700} className={text} style={textShadow(color)}>
        {page} / {total}
      </Text>
    </Box>
  );
}
