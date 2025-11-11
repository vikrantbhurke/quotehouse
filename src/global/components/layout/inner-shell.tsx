import {
  ButtonZen,
  ButtonNext,
  ButtonLogo,
  ButtonInfo,
  ButtonShuffle,
  ButtonPrevious,
  ButtonAbout,
} from "@/global/components/common";
import { Box, Group } from "@mantine/core";
import { ButtonCopy, ButtonShare, PageCounter } from "@/features/quote/views";

const inner = `w-full min-h-screen max-w-3xl`;
const footer = `fixed bottom-0 z-100 h-[50px] w-full max-w-3xl`;
const header = `w-full max-w-[768px] fixed top-0 z-100 backdrop-blur-[10px] bg-[rgba(var(--bg-one),0.5)]`;

export function InnerShell({ children, color, quote, page, total }: any) {
  return (
    <Box className={inner}>
      <Box className={header} h={60}>
        <Group px="md" h="100%" justify="space-between">
          <ButtonLogo color={color} />
          <PageCounter page={page} total={total} color={color} />
          <ButtonAbout color={color} />
        </Group>
      </Box>

      {children}

      <Box className={footer} h={60}>
        <Group px="md" h="100%" justify="space-between">
          <ButtonPrevious total={total} color={color} />

          <Group>
            <ButtonShare color={color} author={quote.author} page={page} />
            <ButtonCopy jsonQuote={JSON.stringify(quote)} color={color} />
            <ButtonZen color={color} />
            <ButtonShuffle total={total} color={color} />
            <ButtonInfo color={color} />
          </Group>

          <ButtonNext total={total} color={color} />
        </Group>
      </Box>
    </Box>
  );
}
