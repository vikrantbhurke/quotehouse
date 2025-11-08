"use client";
import clsx from "clsx";
import { getZen, opacity } from "@/app/tailwind";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import classes from "@/app/common.module.css";
import { outfit } from "@/global/styles/fonts";
import { RootState } from "@/global/states/store";
import { Group, ThemeIcon, Title } from "@mantine/core";

export function ButtonLogo() {
  const router = useRouter();
  const { isZen } = useSelector((state: RootState) => state.global);

  const handleClick = () => router.push("/1");

  const icon = clsx(classes.boxShadow, getZen(isZen));

  const title = clsx(
    outfit.className,
    "antialiased",
    classes.textShadow,
    getZen(isZen)
  );

  return (
    <Group gap={8} onClick={handleClick} className={opacity}>
      <ThemeIcon variant="white" size="lg" radius="xl" className={icon} />

      <Title order={4} hiddenFrom="sm" className={title}>
        Quotehouse
      </Title>

      <Title order={3} visibleFrom="sm" className={title}>
        Quotehouse
      </Title>
    </Group>
  );
}
