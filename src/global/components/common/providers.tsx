"use client";
import { Provider } from "react-redux";
import { theme } from "@/global/styles/theme";
import { store } from "@/global/states/store";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { resolveCssVariables } from "@/global/styles/css-variables";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <MantineProvider
        theme={theme}
        defaultColorScheme="dark"
        cssVariablesResolver={resolveCssVariables}>
        <Notifications />
        {children}
      </MantineProvider>
    </Provider>
  );
}
