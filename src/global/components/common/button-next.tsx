"use client";
import { useSelector } from "react-redux";
import { ActionIcon, Box } from "@mantine/core";
import { getZen } from "@/global/styles/tailwind";
import { RootState } from "@/global/states/store";
import { IconArrowRight } from "@tabler/icons-react";
import { useNavigate } from "@/global/hooks/use-navigate";
import { boxShadow } from "@/global/styles/styles";

export function ButtonNext({ total, color }: any) {
  const { increment } = useNavigate(total);
  const { isZen } = useSelector((state: RootState) => state.global);

  const handleNext = () => increment();

  return (
    <Box className={getZen(isZen)}>
      <ActionIcon
        variant="white"
        size="lg"
        radius="xl"
        onClick={handleNext}
        style={boxShadow(color)}>
        <IconArrowRight size={16} color={color} stroke={3} />
      </ActionIcon>
    </Box>
  );
}
