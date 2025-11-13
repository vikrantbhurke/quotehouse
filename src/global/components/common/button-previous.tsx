"use client";
import { useSelector } from "react-redux";
import { ActionIcon, Box } from "@mantine/core";
import { getZen } from "@/global/styles/tailwind";
import { RootState } from "@/global/states/store";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "@/global/hooks/use-navigate";

export function ButtonPrevious({ total, color }: any) {
  const { decrement } = useNavigate(total);
  const { isZen } = useSelector((state: RootState) => state.global);

  const handlePrevious = () => decrement();

  return (
    <Box className={getZen(isZen)}>
      <ActionIcon
        size="lg"
        radius="xl"
        variant="white"
        onClick={handlePrevious}>
        <IconArrowLeft size={16} color={color} stroke={3} />
      </ActionIcon>
    </Box>
  );
}
