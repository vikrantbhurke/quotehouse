"use client";
import clsx from "clsx";
import { Box, lighten } from "@mantine/core";

export function OuterShell({ children, color }: any) {
  const colorLight = lighten(color, 0.2);

  const outer = "flex flex-col items-center";

  const gradient =
    "bg-[radial-gradient(circle,var(--color-light),var(--color)_100%)]";

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
