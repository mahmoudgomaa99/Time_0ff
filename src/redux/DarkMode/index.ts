import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
type TInitialValues = {
  isDarkMode: boolean;
};
const initialValues: TInitialValues = {
  isDarkMode: false,
};
const slice = createSlice({
  name: 'darkMode',
  initialState: initialValues,
  reducers: {
    ChangeMode: state => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const selectIsDarkMode = (state: RootState) => state.darkMode.isDarkMode;
export const DarkMode = {
  slice,
  ChangeMode: slice.actions.ChangeMode,
};
