"use client";
import { aboutRoute } from "@/global/constants";
import { outfit } from "@/global/styles/fonts";
import { boxShadow } from "@/global/styles/styles";
import { Button } from "@mantine/core";
import clsx from "clsx";
import Link from "next/link";

const text = clsx(outfit.className, "antialiased");

export function ButtonAbout({ color }: any) {
  return (
    <Button
      c={color}
      radius="xl"
      variant="white"
      className={text}
      style={boxShadow(color)}
      component={Link}
      href={aboutRoute}>
      About
    </Button>
  );
}
