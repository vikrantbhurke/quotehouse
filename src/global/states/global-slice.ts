import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  color: string;
  isZen: boolean;
  installPrompt: any;
  isInstalled: any;
}

const initialState: GlobalState = {
  color: "",
  isZen: false,
  installPrompt: null,
  isInstalled: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    setIsZen: (state, action: PayloadAction<boolean>) => {
      state.isZen = action.payload;
    },
    setInstallPrompt: (state, action: PayloadAction<any>) => {
      state.installPrompt = action.payload;
    },
    setIsInstalled: (state, action: PayloadAction<boolean>) => {
      state.isInstalled = action.payload;
    },
  },
});

export const { setColor, setIsZen, setInstallPrompt, setIsInstalled } =
  globalSlice.actions;

export default globalSlice.reducer;
