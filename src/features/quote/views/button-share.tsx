"use client";
import { useSelector } from "react-redux";
import { useDisclosure } from "@mantine/hooks";
import { getZen } from "@/global/styles/tailwind";
import { RootState } from "@/global/states/store";
import { IconShare } from "@tabler/icons-react";
import { ActionIcon, Box } from "@mantine/core";
import { ModalShare } from "./modal-share";

export function ButtonShare({ color, author, page }: any) {
  const { isZen } = useSelector((state: RootState) => state.global);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box className={getZen(isZen)}>
      <ModalShare author={author} page={page} opened={opened} close={close} />

      <ActionIcon size="lg" radius="xl" variant="white" onClick={open}>
        <IconShare size={16} color={color} stroke={3} />
      </ActionIcon>
    </Box>
  );
}
