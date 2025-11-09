"use client";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { Box, lighten } from "@mantine/core";
import { RootState } from "@/global/states/store";

export function OuterShell({ children }: any) {
  const { color } = useSelector((state: RootState) => state.global);
  const colorLight = lighten(color, 0.2);

  const outer = "flex flex-col items-center";

  const gradient =
    "bg-[linear-gradient(to_bottom,var(--color)_0%,var(--color-light)_33%,var(--color-light)_67%,var(--color)_100%)]";

  const variables = {
    "--color": color,
    "--color-light": colorLight,
  };

  return (
    <Box className={clsx(outer, gradient)} style={variables}>
      {children}
    </Box>
  );
}
