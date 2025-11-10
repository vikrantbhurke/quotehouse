"use client";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { outfit } from "@/global/styles/fonts";
import { getZen } from "@/global/styles/tailwind";
import { RootState } from "@/global/states/store";
import { IconInfoCircle } from "@tabler/icons-react";
import { Box, Popover, Stack, ThemeIcon, Title } from "@mantine/core";
import { boxShadow } from "@/global/styles/styles";

const title = clsx(outfit.className, "antialiased");

export function ButtonInfo({ color }: any) {
  const { isZen } = useSelector((state: RootState) => state.global);

  return (
    <Box className={getZen(isZen)}>
      <Popover width={200} position="bottom" shadow="md">
        <Popover.Target>
          <ThemeIcon
            size="lg"
            radius="xl"
            variant="white"
            style={boxShadow(color)}>
            <IconInfoCircle size={16} color={color} stroke={3} />
          </ThemeIcon>
        </Popover.Target>

        <Popover.Dropdown bg="white" bd="none" miw={350}>
          <Stack gap={0}>
            <Title order={6} c="var(--tx-one)" fw={500} className={title}>
              Ways to go to next or previous page
            </Title>

            <Title order={6} c="var(--tx-one)" fw={500} className={title}>
              1. Click arrow buttons on screen bottom left & right.
            </Title>

            <Title order={6} c="var(--tx-one)" fw={500} className={title}>
              2. Press keyboard left & right buttons on desktop.
            </Title>

            <Title order={6} c="var(--tx-one)" fw={500} className={title}>
              3. Swipe left & right on touch device.
            </Title>

            <Title order={6} c="var(--tx-one)" fw={500} className={title}>
              4. Type page number in url in browser search bar.
            </Title>
          </Stack>
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
}
