import { CSSVariablesResolver } from "@mantine/core";

export const resolveCssVariables: CSSVariablesResolver = () => cssVariables();

export const cssVariables = () => {
  return {
    dark: {},
    variables: {},
    light: {},
  };
};
