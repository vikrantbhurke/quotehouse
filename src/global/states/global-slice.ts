import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { colors } from "@/global/constants";

export interface GlobalState {
  color: string;
  isZen: boolean;
}

const initialState: GlobalState = {
  color: colors[Math.floor(Math.random() * colors.length)],
  isZen: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setColor: (state) => {
      const filtered = colors.filter((color: string) => color !== state.color);
      const randomIndex = Math.floor(Math.random() * filtered.length);
      state.color = filtered[randomIndex];
    },
    setIsZen: (state, action: PayloadAction<boolean>) => {
      state.isZen = action.payload;
    },
  },
});

export const { setColor, setIsZen } = globalSlice.actions;

export default globalSlice.reducer;
