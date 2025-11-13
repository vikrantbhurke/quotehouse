"use client";
import clsx from "clsx";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import { outfit } from "@/global/styles/fonts";
import {
  Button,
  Modal,
  Select,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export function ModalDownload({ opened, close }: any) {
  const [value, setValue] = useState<string | null>("React");

  const border = { border: "3px solid var(--mantine-color-gray-3)" };
  const text = clsx(outfit.className, "antialiased");

  return (
    <Modal
      centered
      opened={opened}
      onClose={close}
      title={
        <Text fw={900} fz={20} className={text}>
          Download Image
        </Text>
      }
      closeButtonProps={{
        icon: (
          <IconX size={20} stroke={3} color="var(--mantine-color-dark-6)" />
        ),
      }}>
      <Stack>
        <Select
          size="lg"
          radius="md"
          className={text}
          classNames={{ input: text }}
          styles={{ input: border, dropdown: border }}
          label={
            <Title order={5} className={text}>
              Resolution
            </Title>
          }
          data={[
            "React",
            "Angular",
            "Vue",
            "Svelte",
            "Remix",
            "Next",
            "Nest",
            "Nuxt",
          ]}
          value={value}
          onChange={setValue}
        />

        <Select
          size="lg"
          radius="md"
          className={text}
          classNames={{ input: text }}
          styles={{ input: border, dropdown: border }}
          label={
            <Title order={5} className={text}>
              Format
            </Title>
          }
          data={[]}
          value={value}
          onChange={setValue}
        />

        <Select
          size="lg"
          radius="md"
          className={text}
          classNames={{ input: text }}
          styles={{ input: border, dropdown: border }}
          label={
            <Title order={5} className={text}>
              Font
            </Title>
          }
          data={[]}
          value={value}
          onChange={setValue}
        />

        <Select
          size="lg"
          radius="md"
          className={text}
          classNames={{ input: text }}
          styles={{ input: border, dropdown: border }}
          label={
            <Title order={5} className={text}>
              Color
            </Title>
          }
          data={[]}
          value={value}
          onChange={setValue}
        />

        <Space />

        <Button
          variant="filled"
          radius="xl"
          size="xl"
          color="var(--mantine-color-gray-6)">
          <Text c="white" fz={24} fw={600}>
            Download
          </Text>
        </Button>

        <Space />
      </Stack>
    </Modal>
  );
}
