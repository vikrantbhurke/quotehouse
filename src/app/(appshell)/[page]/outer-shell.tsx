"use client";
import { Box, lighten } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setColor } from "@/global/states/global-slice";
import { getRandomColor } from "./get-random-color";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import clsx from "clsx";

export function OuterShell({ children }: any) {
  const dispatch = useDispatch();
  const { color } = useSelector((state: RootState) => state.global);
  const colorLight = lighten(color, 0.2);

  const outer = "flex flex-col items-center";

  const gradient =
    "bg-[linear-gradient(to_bottom,var(--color)_0%,var(--color-light)_33%,var(--color-light)_67%,var(--color)_100%)]";

  const variables = {
    "--color": color,
    "--color-light": colorLight,
  };

  useEffect(() => {
    getRandomColor();
    dispatch(setColor(getRandomColor() || ""));
  }, [dispatch]);

  return (
    <Box className={clsx(outer, gradient)} style={variables}>
      {children}
    </Box>
  );
}
