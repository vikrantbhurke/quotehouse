"use client";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { outfit } from "@/global/styles/fonts";
import { getZen, opacity } from "@/app/tailwind";
import { RootState } from "@/global/states/store";
import classes from "@/global/styles/common.module.css";
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

      <Title c="white" order={4} hiddenFrom="sm" className={title}>
        Quotehouse
      </Title>

      <Title c="white" order={3} visibleFrom="sm" className={title}>
        Quotehouse
      </Title>
    </Group>
  );
}
