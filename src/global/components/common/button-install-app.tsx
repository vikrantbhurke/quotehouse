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
        className={text}
        onClick={handleInstallClick}
        bg="var(--mantine-color-dark-6)"
        leftSection={<IconDownload size={20} color="white" stroke={3} />}>
        Install App
      </Button>
    )
  );
}
