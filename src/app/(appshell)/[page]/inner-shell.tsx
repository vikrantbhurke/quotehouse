import { ButtonNext } from "./button-next";
import { ButtonLogo } from "./button-logo";
import { ButtonMenu } from "./button-menu";
import { ButtonShuffle } from "./button-shuffle";
import { Box, Group, Space } from "@mantine/core";
import { ButtonPrevious } from "./button-previous";
import { ButtonZen } from "./button-zen";
import { PageCounter } from "./page-counter";

const inner = `w-full min-h-screen max-w-3xl`;
const footer = `fixed bottom-0 z-100 h-[50px] w-full max-w-3xl`;
const header = `w-full max-w-[768px] fixed top-0 z-100] backdrop-blur-[10px] bg-[rgba(var(--bg-one),0.5)]`;

export function InnerShell({ children, page, total }: any) {
  return (
    <Box className={inner}>
      <Box className={header} h={60}>
        <Group px="md" h="100%" justify="space-between">
          <ButtonLogo />

          <PageCounter page={page} total={total} />

          <Group w={100} justify="flex-end">
            <Space />
            <ButtonMenu />
          </Group>
          {/* <ButtonInstallApp /> */}
        </Group>
      </Box>

      {children}

      <Box className={footer} h={60}>
        <Group px="md" h="100%" justify="space-between">
          <ButtonPrevious total={total} />

          <Group>
            <ButtonShuffle total={total} />
            <ButtonZen />
            <ButtonShuffle total={total} />
          </Group>

          <ButtonNext total={total} />
        </Group>
      </Box>
    </Box>
  );
}
