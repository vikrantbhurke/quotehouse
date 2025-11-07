"use client";
import { useState } from "react";
import { ButtonNext } from "./button-next";
import { ButtonLogo } from "./button-logo";
import { ButtonMenu } from "./button-menu";
import { useNavigate } from "./use-navigate";
import { ButtonRandom } from "./button-random";
import { Box, Group, Text } from "@mantine/core";
import { ButtonPrevious } from "./button-previous";
import { getRandomColor } from "./get-random-color";

const outer = "flex flex-col items-center";
const inner = `w-full min-h-screen max-w-3xl`;
const footer = `fixed bottom-0 z-100 h-[50px] w-full max-w-3xl`;
const header = `w-full max-w-[768px] fixed top-0 z-100] backdrop-blur-[10px] bg-[rgba(var(--bg-one),0.5)]`;

export function ColorPicker({ children }: any) {
  const { increment, decrement, page } = useNavigate();
  const [currentColor, setCurrentColor] = useState(getRandomColor());

  const handleNext = () => {
    increment();
    console.log("Next fired");
    setCurrentColor(getRandomColor(currentColor.hex));
  };

  const handlePrevious = () => {
    decrement();
    console.log("Previous fired");
    setCurrentColor(getRandomColor(currentColor.hex));
  };

  return (
    <Box className={outer} style={{ backgroundColor: currentColor.hex }}>
      <Box className={inner}>
        <Box className={header} h={60}>
          <Group px="md" h="100%" justify="space-between">
            <ButtonLogo />

            <Text fw={700}>{page} / 56789</Text>

            <ButtonMenu />
          </Group>
        </Box>

        {children}

        <Box className={footer} h={60}>
          <Group px="md" h="100%" justify="space-between">
            <ButtonPrevious handlePrevious={handlePrevious} />
            <ButtonRandom />
            <ButtonNext handleNext={handleNext} />
          </Group>
        </Box>
      </Box>
    </Box>
  );
}
