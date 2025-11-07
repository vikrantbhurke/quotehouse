"use client";
import { ActionIcon, Group, Menu, Space, Title } from "@mantine/core";
import { IconMenu4 } from "@tabler/icons-react";
import { outfit } from "@/global/styles/fonts";
import classes from "@/app/common.module.css";
import { opacity } from "@/app/tailwind";
import clsx from "clsx";

export function ButtonMenu({ color }: any) {
  return (
    <Group>
      <Space w={50} />

      <Menu
        radius="lg"
        shadow="md"
        width={200}
        styles={{
          item: {
            backgroundColor: "white",
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

        <Menu.Dropdown bg="white" bd="none" className={classes.boxShadow}>
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
    </Group>
  );
}
