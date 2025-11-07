"use client";
import { outfit } from "@/global/styles/fonts";
import { Group, ThemeIcon, Title } from "@mantine/core";
import { opacity } from "@/app/tailwind";
import classes from "@/app/common.module.css";
import { useRouter } from "next/navigation";

export function ButtonLogo() {
  const router = useRouter();

  return (
    <Group gap={8} onClick={() => router.push("/1")} className={opacity}>
      <ThemeIcon
        variant="white"
        size="lg"
        radius="xl"
        className={classes.boxShadow}
      />

      <Title
        order={4}
        hiddenFrom="sm"
        className={`${outfit.className} antialiased ${classes.textShadow}`}>
        Quotehouse
      </Title>

      <Title
        order={3}
        visibleFrom="sm"
        className={`${outfit.className} antialiased ${classes.textShadow}`}>
        Quotehouse
      </Title>
    </Group>
  );
}
