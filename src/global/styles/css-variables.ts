import { CSSVariablesResolver } from "@mantine/core";

export const darkOne = "#000000";
export const lightOne = "#FFFFFF";

export const resolveCssVariables: CSSVariablesResolver = () => cssVariables();

export const cssVariables = () => {
  return {
    variables: {},
    light: {
      "--tx-one": darkOne,
      "--bg-one": lightOne,
      "--bd-one": "#dddddd",
    },
    dark: {
      "--tx-one": lightOne,
      "--bg-one": darkOne,
      "--bd-one": "#222222",
    },
  };
};
