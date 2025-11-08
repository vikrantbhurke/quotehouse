import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  color: string;
  isZen: boolean;
}

const initialState: GlobalState = {
  color: "",
  isZen: false,
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
  },
});

export const { setColor, setIsZen } = globalSlice.actions;

export default globalSlice.reducer;
