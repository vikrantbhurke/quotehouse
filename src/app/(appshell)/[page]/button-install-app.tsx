"use client";
import clsx from "clsx";
import { opacity } from "@/app/tailwind";
import { ActionIcon, Space } from "@mantine/core";
import classes from "@/app/common.module.css";
import { useInstallApp } from "@/global/hooks";
import { IconDownload } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export function ButtonInstallApp() {
  const { color } = useSelector((state: RootState) => state.global);
  const { installPrompt, isInstalled, handleInstallClick } = useInstallApp();

  return (
    <>
      {!isInstalled && installPrompt ? (
        <ActionIcon
          size="lg"
          radius="xl"
          variant="white"
          className={clsx(classes.boxShadow, opacity)}
          onClick={handleInstallClick}>
          <IconDownload size={20} color={color} stroke={3} />
        </ActionIcon>
      ) : (
        <Space w={34} />
      )}
    </>
  );
}
