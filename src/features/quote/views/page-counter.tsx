"use client";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useNavigate } from "@/global/hooks";
import { outfit } from "@/global/styles/fonts";
import { Box, NumberInput } from "@mantine/core";
import { getZen } from "@/global/styles/tailwind";
import { RootState } from "@/global/states/store";

export function PageCounter({
  page,
  total,
}: // color
any) {
  const { isZen } = useSelector((state: RootState) => state.global);
  const { input } = useNavigate(total);

  const text = clsx(outfit.className, "antialiased", getZen(isZen));

  const handleChange = (value: string | number) => {
    let numeric: number;
    if (typeof value === "string") numeric = parseInt(value, 10);
    else numeric = value;
    if (isNaN(numeric) || numeric < 1) numeric = 1;
    input(numeric);
  };

  return (
    <Box className={getZen(isZen)}>
      <NumberInput
        min={1}
        max={total}
        hideControls
        value={page}
        variant="unstyled"
        clampBehavior="strict"
        onChange={handleChange}
        suffix={`  /  ${total}`}
        classNames={{ input: text }}
        styles={{
          input: {
            padding: 0,
            maxWidth: 100,
            color: "white",
            textAlign: "center",
            background: "transparent",
            border: `none`,
          },
        }}
      />
    </Box>
  );
}
