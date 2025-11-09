"use client";
import clsx from "clsx";
import Link from "next/link";
import { useSelector } from "react-redux";
import { outfit } from "@/global/styles/fonts";
import { IconMenu4 } from "@tabler/icons-react";
import { aboutRoute } from "@/global/constants";
import { getZen, opacity } from "@/app/tailwind";
import { RootState } from "@/global/states/store";
import classes from "@/global/styles/common.module.css";
import { Box, Menu, ThemeIcon, Title } from "@mantine/core";

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
          <Menu.Item component={Link} href={aboutRoute}>
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
