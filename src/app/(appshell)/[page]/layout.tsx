import {
  IconCircleFilled,
  IconSquareFilled,
  IconTriangleFilled,
  IconSquareRotatedFilled,
  IconTriangleInvertedFilled,
} from "@tabler/icons-react";
import { Box, Group, ThemeIcon, Title } from "@mantine/core";

type LayoutProps = {
  params: Promise<{ page: string }>;
  children: React.ReactNode;
};

const outer = "flex flex-col items-center";
const inner = `w-full min-h-screen max-w-3xl border-l border-r border-(--bd-one)`;
const footer = `fixed bottom-0 z-100 h-[50px] w-full max-w-3xl border-t border-(--bd-one)`;
const header = `w-full max-w-[768px] fixed top-0 z-100] border-b border-(--bd-one) backdrop-blur-[10px] bg-[rgba(var(--bg-one),0.5)]`;

export default async function Layout({ children, params }: LayoutProps) {
  const { page } = await params;
  console.log("Page", page);

  return (
    <Box className={outer}>
      <Box className={inner}>
        <Box className={header} h={60} style={{ border: "1px solid blue" }}>
          <Group
            px="md"
            h="100%"
            justify="space-between"
            style={{ border: "1px solid green" }}>
            <ThemeIcon>
              <IconCircleFilled size={30} />
            </ThemeIcon>

            <Title order={5}>{page}/56789</Title>

            <ThemeIcon>
              <IconSquareFilled size={30} />
            </ThemeIcon>
          </Group>
        </Box>
        {children}
        <Box className={footer} h={60} style={{ border: "1px solid blue" }}>
          <Group
            px="md"
            h="100%"
            justify="space-between"
            style={{ border: "1px solid green" }}>
            <ThemeIcon>
              <IconTriangleFilled size={30} />
            </ThemeIcon>

            <ThemeIcon>
              <IconSquareRotatedFilled size={30} />
            </ThemeIcon>

            <ThemeIcon>
              <IconTriangleInvertedFilled size={30} />
            </ThemeIcon>
          </Group>
        </Box>
      </Box>
    </Box>
  );
}
