import { createSlice } from "@reduxjs/toolkit";
import { RootState, useAppSelector } from "../store";
type TinitialState = {
  isSplashDone: boolean;
};
const initialState: TinitialState = {
  isSplashDone: false,
};
export const SplashSlice = createSlice({
  name: "splash",
  initialState,
  reducers: {
    setIsSplashDone: (state, action) => {
      state.isSplashDone = true;
    },
  },
});
const Splash = {
  SplashSlice,
  setIsSplashDone: SplashSlice.actions.setIsSplashDone,
};
export const selectIsSplashDone = (state: RootState) =>
  state.splash.isSplashDone;

export default Splash;
