"use client";
import clsx from "clsx";
import { Button } from "@mantine/core";
import { outfit } from "@/global/styles/fonts";
import { useInstallApp } from "@/global/hooks";
import { IconDownload } from "@tabler/icons-react";

const text = clsx(outfit.className, "antialiased");

export function ButtonInstallApp() {
  const { installPrompt, isInstalled, handleInstallClick } = useInstallApp();

  return (
    !isInstalled &&
    installPrompt && (
      <Button
        size="md"
        radius="xl"
        bg="var(--tx-one)"
        className={text}
        onClick={handleInstallClick}
        leftSection={<IconDownload size={20} color="white" stroke={3} />}>
        Install App
      </Button>
    )
  );
}
