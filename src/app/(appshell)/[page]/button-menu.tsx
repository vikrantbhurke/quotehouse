"use client";
import clsx from "clsx";
import { Box, Menu, ThemeIcon, Title } from "@mantine/core";
import { IconMenu4 } from "@tabler/icons-react";
import { outfit } from "@/global/styles/fonts";
import classes from "@/app/common.module.css";
import { getZen, opacity } from "@/app/tailwind";
import { RootState } from "@/global/states/store";
import { useSelector } from "react-redux";

export function ButtonMenu() {
  const { color, isZen } = useSelector((state: RootState) => state.global);

  const title = clsx(outfit.className, "antialiased");

  return (
    <Box className={getZen(isZen)}>
      <Menu radius="lg" shadow="md" width={200}>
        <Menu.Target>
          <ThemeIcon
            variant="white"
            size="lg"
            radius="xl"
            className={clsx(classes.boxShadow, opacity)}>
            <IconMenu4 size={20} color={color} stroke={3} />
          </ThemeIcon>
        </Menu.Target>

        <Menu.Dropdown bg="white" bd="none">
          <Menu.Item>
            <Title order={4} c="#bbb" fw={800} ta="center" className={title}>
              About
            </Title>
          </Menu.Item>
          <Menu.Item>
            <Title order={4} c="#bbb" fw={800} ta="center" className={title}>
              Contact
            </Title>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
}
