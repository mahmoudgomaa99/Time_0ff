import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import RNRestart from 'react-native-restart';
type TInitialValues = {
  language: 'en' | 'ar';
};
const initialState: TInitialValues = {
  language: 'en',
};
const slice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: state => {
      state.language = state.language === 'ar' ? 'en' : 'ar';
      setTimeout(() => RNRestart.Restart(), 40);
    },
  },
});

export const selectLanguage = (state: RootState) => state.language.language;

const Language = {
  slice,
  changeLanguage: slice.actions.changeLanguage,
};

export default Language;
