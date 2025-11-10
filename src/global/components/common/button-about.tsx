"use client";
import { aboutRoute } from "@/global/constants";
import { RootState } from "@/global/states/store";
import { outfit } from "@/global/styles/fonts";
import { boxShadow } from "@/global/styles/styles";
import { getZen } from "@/global/styles/tailwind";
import { Button } from "@mantine/core";
import clsx from "clsx";
import Link from "next/link";
import { useSelector } from "react-redux";

const text = clsx(outfit.className, "antialiased");

export function ButtonAbout({ color }: any) {
  const { isZen } = useSelector((state: RootState) => state.global);

  return (
    <Button
      c={color}
      radius="xl"
      variant="white"
      className={clsx(getZen(isZen), text)}
      style={boxShadow(color)}
      component={Link}
      href={aboutRoute}>
      About
    </Button>
  );
}
