import {
  IconSquareRotatedFilled,
  IconTriangleInvertedFilled,
} from "@tabler/icons-react";
import { Box, Group, ThemeIcon, Title } from "@mantine/core";
import { ButtonLogo } from "./button-logo";
import { ButtonMenu } from "./button-menu";
import { ButtonPrevious } from "./button-previous";
import { ButtonNext } from "./button-next";
import { ButtonRandom } from "./button-random";

type LayoutProps = {
  params: Promise<{ page: string }>;
  children: React.ReactNode;
};

const outer = "flex flex-col items-center";
const inner = `w-full min-h-screen max-w-3xl`;
const footer = `fixed bottom-0 z-100 h-[50px] w-full max-w-3xl`;
const header = `w-full max-w-[768px] fixed top-0 z-100] backdrop-blur-[10px] bg-[rgba(var(--bg-one),0.5)]`;

export default async function Layout({ children, params }: LayoutProps) {
  const { page } = await params;

  return (
    <Box className={outer} style={{ backgroundColor: "#2b7fff" }}>
      <Box className={inner}>
        <Box className={header} h={60}>
          <Group px="md" h="100%" justify="space-between">
            <ButtonLogo />

            <Title order={4}>{page} / 56789</Title>

            <ButtonMenu />
          </Group>
        </Box>

        {children}

        <Box className={footer} h={60}>
          <Group px="md" h="100%" justify="space-between">
            <ButtonPrevious />
            <ButtonRandom />
            <ButtonNext />
          </Group>
        </Box>
      </Box>
    </Box>
  );
}
