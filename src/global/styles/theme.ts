import { createTheme, Text, Title } from "@mantine/core";

export const theme = createTheme({
  components: {
    Text: Text.extend({
      defaultProps: {
        c: "var(--tx-one)",
      },
    }),

    Title: Title.extend({
      defaultProps: {
        c: "var(--tx-one)",
      },
    }),
  },
});
