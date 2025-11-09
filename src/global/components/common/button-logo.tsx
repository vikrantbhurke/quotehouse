"use client";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { outfit } from "@/global/styles/fonts";
import { getZen } from "@/global/styles/tailwind";
import { RootState } from "@/global/states/store";
import { Group, ThemeIcon, Title } from "@mantine/core";
import { viewQuoteRoute } from "@/global/constants";
import { boxShadow, textShadow } from "@/global/styles/styles";

export function ButtonLogo({ color }: any) {
  const router = useRouter();
  const { isZen } = useSelector((state: RootState) => state.global);

  const handleClick = () => router.push(viewQuoteRoute(1));

  const text = clsx(outfit.className, "antialiased", getZen(isZen));

  return (
    <Group gap={8} onClick={handleClick}>
      <ThemeIcon
        variant="white"
        size="lg"
        radius="xl"
        style={boxShadow(color)}
        className={getZen(isZen)}
      />

      <Title c="white" size="xl" className={text} style={textShadow(color)}>
        Quotehouse
      </Title>
    </Group>
  );
}
