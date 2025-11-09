"use client";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useClipboard } from "@mantine/hooks";
import { IconCopy } from "@tabler/icons-react";
import { ActionIcon, Box } from "@mantine/core";
import { getZen, opacity } from "@/app/tailwind";
import { RootState } from "@/global/states/store";
import classes from "@/global/styles/common.module.css";

export function ButtonCopy({ jsonQuote }: any) {
  const quote = JSON.parse(jsonQuote);
  const clipboard = useClipboard({ timeout: 500 });
  const { color, isZen } = useSelector((state: RootState) => state.global);

  const handleClick = () =>
    clipboard.copy(`${quote.content} - ${quote.author}`);

  return (
    <Box className={getZen(isZen)}>
      <ActionIcon
        variant="white"
        size="lg"
        radius="xl"
        onClick={handleClick}
        color={clipboard.copied ? "teal" : "blue"}
        className={clsx(classes.boxShadow, opacity)}>
        <IconCopy size={20} color={color} stroke={3} />
      </ActionIcon>
    </Box>
  );
}
