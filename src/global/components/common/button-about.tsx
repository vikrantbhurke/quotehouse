"use client";
import clsx from "clsx";
import Link from "next/link";
import { Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { outfit } from "@/global/styles/fonts";
import { aboutRoute } from "@/global/constants";
import { RootState } from "@/global/states/store";
import { getZen } from "@/global/styles/tailwind";

const text = clsx(outfit.className, "antialiased");

export function ButtonAbout({ color }: any) {
  const { isZen } = useSelector((state: RootState) => state.global);

  return (
    <Button
      c={color}
      radius="xl"
      variant="white"
      className={clsx(getZen(isZen), text)}
      component={Link}
      href={aboutRoute}>
      About
    </Button>
  );
}
