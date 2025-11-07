"use client";
import { ButtonNext } from "./button-next";
import { ButtonLogo } from "./button-logo";
import { ButtonMenu } from "./button-menu";
import { useNavigate } from "./use-navigate";
import { ButtonShuffle } from "./button-shuffle";
import { Box, Group, Text } from "@mantine/core";
import { ButtonPrevious } from "./button-previous";
import { getRandomColor } from "./get-random-color";
import { outfit } from "@/global/styles/fonts";

const outer = "flex flex-col items-center";
const inner = `w-full min-h-screen max-w-3xl`;
const footer = `fixed bottom-0 z-100 h-[50px] w-full max-w-3xl`;
const header = `w-full max-w-[768px] fixed top-0 z-100] backdrop-blur-[10px] bg-[rgba(var(--bg-one),0.5)]`;

export function ColorPicker({ children, totalElements }: any) {
  const { increment, decrement, shuffle, page } = useNavigate(totalElements);
  const currentColor = getRandomColor();

  const handleNext = () => {
    increment();
    getRandomColor();
  };

  const handlePrevious = () => {
    decrement();
    getRandomColor();
  };

  const handleShuffle = () => {
    shuffle();
    getRandomColor();
  };

  return (
    <Box className={outer} style={{ backgroundColor: currentColor }}>
      <Box className={inner}>
        <Box className={header} h={60}>
          <Group px="md" h="100%" justify="space-between">
            <ButtonLogo />

            <Text
              fw={700}
              className={`${outfit.className} antialiased opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out`}>
              {page} / 56789
            </Text>

            <ButtonMenu color={currentColor} />
          </Group>
        </Box>

        {children}

        <Box className={footer} h={60}>
          <Group px="md" h="100%" justify="space-between">
            <ButtonPrevious
              handlePrevious={handlePrevious}
              color={currentColor}
            />

            <ButtonShuffle handleShuffle={handleShuffle} color={currentColor} />

            <ButtonNext handleNext={handleNext} color={currentColor} />
          </Group>
        </Box>
      </Box>
    </Box>
  );
}
