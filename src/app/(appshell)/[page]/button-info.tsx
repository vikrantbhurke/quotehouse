"use client";
import clsx from "clsx";
import { getZen, opacity } from "@/app/tailwind";
import { useSelector } from "react-redux";
import classes from "@/app/common.module.css";
import {
  ActionIcon,
  Box,
  Stack,
  ThemeIcon,
  Title,
  Tooltip,
} from "@mantine/core";
import { RootState } from "@/global/states/store";
import { IconInfoCircle } from "@tabler/icons-react";
import { outfit } from "@/global/styles/fonts";

export function ButtonInfo() {
  const { color, isZen } = useSelector((state: RootState) => state.global);

  const title = clsx(outfit.className, "antialiased");

  return (
    <Box className={getZen(isZen)}>
      <Tooltip
        label={
          <Stack gap={0} p="md" className={title}>
            <Title order={6} c="#999" fw={700}>
              You can go to next or previous page by
            </Title>

            <Title order={6} c="#999" fw={700}>
              1. Clicking arrow buttons on screen bottom left & right.
            </Title>

            <Title order={6} c="#999" fw={700}>
              2. Pressing keyboard left & right buttons on desktop.
            </Title>

            <Title order={6} c="#999" fw={700}>
              3. Swiping left & right on touch device.
            </Title>

            <Title order={6} c="#999" fw={700}>
              4. Typing page number in input on screen top center.
            </Title>

            <Title order={6} c="#999" fw={700}>
              5. Typing page number in url in browser search bar.
            </Title>
          </Stack>
        }>
        <ThemeIcon
          variant="white"
          size="lg"
          radius="xl"
          className={clsx(classes.boxShadow, opacity)}>
          <IconInfoCircle size={20} color={color} stroke={3} />
        </ThemeIcon>
      </Tooltip>
    </Box>
  );
}
