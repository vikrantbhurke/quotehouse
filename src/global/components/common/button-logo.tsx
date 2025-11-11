"use client";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { outfit } from "@/global/styles/fonts";
import { getZen } from "@/global/styles/tailwind";
import { RootState } from "@/global/states/store";
import { viewQuoteRoute } from "@/global/constants";
import { Box, Group, ThemeIcon, Title } from "@mantine/core";
import { boxShadow, textShadow } from "@/global/styles/styles";

export function ButtonLogo({ color }: any) {
  const router = useRouter();
  const { isZen } = useSelector((state: RootState) => state.global);

  const handleClick = () => router.push(viewQuoteRoute(1));

  const text = clsx(outfit.className, "antialiased", getZen(isZen));

  return (
    <Group gap={8} onClick={handleClick}>
      <Box className="relative w-[33px] h-[33px]">
        <ThemeIcon
          size={33}
          radius="xl"
          variant="white"
          style={boxShadow(color)}
          className={clsx(getZen(isZen), "absolute top-0 left-0")}
        />

        <ThemeIcon
          size={10}
          radius="xl"
          variant="white"
          style={{
            ...boxShadow(color),
            position: "absolute",
            bottom: "-5px",
            right: "-5px",
          }}
          className={getZen(isZen)}
        />
      </Box>

      <Title c="white" size="xl" className={text} style={textShadow(color)}>
        Quotehouse
      </Title>
    </Group>
  );
}
