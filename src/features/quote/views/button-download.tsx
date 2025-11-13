"use client";
import { ActionIcon, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import { ModalDownload } from "./modal-download";
import { getZen } from "@/global/styles/tailwind";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export function ButtonDownload({ color }: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const { isZen } = useSelector((state: RootState) => state.global);

  return (
    <Box className={getZen(isZen)}>
      <ModalDownload opened={opened} close={close} />

      <ActionIcon size="lg" radius="xl" variant="white" onClick={open}>
        <IconDownload size={16} color={color} stroke={3} />
      </ActionIcon>
    </Box>
  );
}
