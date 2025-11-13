"use client";
import { useSelector } from "react-redux";
import { ActionIcon, Box } from "@mantine/core";
import { getZen } from "@/global/styles/tailwind";
import { RootState } from "@/global/states/store";
import { IconArrowsShuffle } from "@tabler/icons-react";
import { useNavigate } from "@/global/hooks/use-navigate";

export function ButtonShuffle({ total, color }: any) {
  const { shuffle } = useNavigate(total);
  const { isZen } = useSelector((state: RootState) => state.global);

  const handleShuffle = () => shuffle();

  return (
    <Box className={getZen(isZen)}>
      <ActionIcon size="lg" radius="xl" variant="white" onClick={handleShuffle}>
        <IconArrowsShuffle size={16} color={color} stroke={3} />
      </ActionIcon>
    </Box>
  );
}
