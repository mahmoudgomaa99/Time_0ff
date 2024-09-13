import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
type TInitialValues = {
  isDarkMode: boolean;
  currency: string;
};
const initialValues: TInitialValues = {
  isDarkMode: false,
  currency: 'EGP',
};
const slice = createSlice({
  name: 'darkMode',
  initialState: initialValues,
  reducers: {
    ChangeMode: state => {
      state.isDarkMode = !state.isDarkMode;
    },
    changeCurrency: (state, action) => {
      console.log(action);

      state.currency = action.payload;
    },
  },
});

export const selectIsDarkMode = (state: RootState) => state.darkMode.isDarkMode;
export const selectCurrency = (state: RootState) => state.darkMode.currency;

export const DarkMode = {
  slice,
  ChangeMode: slice.actions.ChangeMode,
  changeCurrency: slice.actions.changeCurrency,
};
