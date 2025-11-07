"use client";
import { Box } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setColor } from "@/global/states/global-slice";
import { getRandomColor } from "./get-random-color";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

const outer = "flex flex-col items-center";

export function OuterShell({ children }: any) {
  const dispatch = useDispatch();
  const { color } = useSelector((state: RootState) => state.global);

  useEffect(() => {
    getRandomColor();
    dispatch(setColor(getRandomColor() || ""));
  }, [dispatch]);

  return (
    <Box className={outer} bg={color}>
      {children}
    </Box>
  );
}
