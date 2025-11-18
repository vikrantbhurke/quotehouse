import clsx from "clsx";
import { outfit } from "./fonts";
import classes from "./app.module.css";
import { createTheme, TextInput, Textarea } from "@mantine/core";

const text = clsx(outfit.className, "antialiased", classes.input);

export const theme = createTheme({
  components: {
    TextInput: TextInput.extend({
      defaultProps: {
        classNames: {
          input: text,
        },
      },
    }),

    Textarea: Textarea.extend({
      defaultProps: {
        classNames: {
          input: text,
        },
      },
    }),
  },
});
