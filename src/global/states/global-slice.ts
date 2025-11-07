import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  color: string;
}

const initialState: GlobalState = {
  color: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

export const { setColor } = globalSlice.actions;

export default globalSlice.reducer;
