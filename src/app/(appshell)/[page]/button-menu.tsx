"use client";
import clsx from "clsx";
import { ActionIcon, Menu, Title } from "@mantine/core";
import { IconMenu4 } from "@tabler/icons-react";
import { outfit } from "@/global/styles/fonts";
import classes from "@/app/common.module.css";
import { opacity } from "@/app/tailwind";
import { RootState } from "@/global/states/store";
import { useSelector } from "react-redux";

export function ButtonMenu() {
  const { color } = useSelector((state: RootState) => state.global);

  return (
    <Menu
      radius="lg"
      shadow="md"
      width={200}
      styles={{
        item: {
          backgroundColor: "white",
        },
        dropdown: {
          boxShadow: "0 2px 4px #999",
        },
      }}>
      <Menu.Target>
        <ActionIcon
          variant="white"
          size="lg"
          radius="xl"
          onClick={() => {}}
          className={clsx(classes.boxShadow, opacity)}>
          <IconMenu4 size={20} color={color} stroke={3} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown bg="white" bd="none">
        <Menu.Item>
          <Title
            order={4}
            c="#bbb"
            fw={800}
            ta="center"
            className={`${outfit.className} antialiased`}>
            About
          </Title>
        </Menu.Item>
        <Menu.Item>
          <Title
            order={4}
            c="#bbb"
            fw={800}
            ta="center"
            className={`${outfit.className} antialiased`}>
            Contact
          </Title>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
