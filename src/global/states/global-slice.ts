import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  isZen: boolean;
}

const initialState: GlobalState = {
  isZen: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsZen: (state, action: PayloadAction<boolean>) => {
      state.isZen = action.payload;
    },
  },
});

export const { setIsZen } = globalSlice.actions;

export default globalSlice.reducer;
