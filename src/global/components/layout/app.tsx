import { Box } from "@mantine/core";

const outer = "bg-white text-black flex flex-col items-center";
const inner = `w-full min-h-screen max-w-3xl`;

type Props = { children: React.ReactNode };

export function App({ children }: Props) {
  return (
    <Box className={outer}>
      <Box className={inner}>{children}</Box>
    </Box>
  );
}
