import { CSSVariablesResolver } from "@mantine/core";

export const resolveCssVariables: CSSVariablesResolver = () => cssVariables();

export const cssVariables = () => {
  return {
    dark: {},
    variables: {},
    light: {
      "--tx-one": "#333",
      "--tx-two": "#888",
      "--tx-three": "#BBB",
      "--tx-four": "#EEE",
    },
  };
};
