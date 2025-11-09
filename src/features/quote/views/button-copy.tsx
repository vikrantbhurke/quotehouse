"use client";
import { useSelector } from "react-redux";
import { useClipboard } from "@mantine/hooks";
import { IconCopy } from "@tabler/icons-react";
import { ActionIcon, Box } from "@mantine/core";
import { getZen } from "@/global/styles/tailwind";
import { RootState } from "@/global/states/store";
import { boxShadow } from "@/global/styles/styles";

export function ButtonCopy({ jsonQuote, color }: any) {
  const quote = JSON.parse(jsonQuote);
  const clipboard = useClipboard({ timeout: 500 });
  const { isZen } = useSelector((state: RootState) => state.global);

  const handleClick = () =>
    clipboard.copy(`${quote.content} - ${quote.author}`);

  return (
    <Box className={getZen(isZen)}>
      <ActionIcon
        variant="white"
        size="lg"
        radius="xl"
        onClick={handleClick}
        style={boxShadow(color)}
        color={clipboard.copied ? "teal" : "blue"}>
        <IconCopy size={16} color={color} stroke={3} />
      </ActionIcon>
    </Box>
  );
}
