"use client";
import clsx from "clsx";
import { getZen, opacity } from "@/app/tailwind";
import { ActionIcon, Box, ThemeIcon } from "@mantine/core";
import classes from "@/app/common.module.css";
import { useInstallApp } from "@/global/hooks";
import { IconDownload } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export function ButtonInstallApp() {
  const { color, isZen } = useSelector((state: RootState) => state.global);
  const { isInstalled, handleInstallClick } = useInstallApp();

  return !isInstalled ? (
    <Box className={getZen(isZen)}>
      <ActionIcon
        size="lg"
        radius="xl"
        variant="white"
        className={clsx(classes.boxShadow, opacity)}
        onClick={handleInstallClick}>
        <IconDownload size={20} color={color} stroke={3} />
      </ActionIcon>
    </Box>
  ) : (
    <ThemeIcon size="lg" radius="xl" variant="transparent" />
  );
}
