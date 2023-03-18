import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
const initialValues = {
  isPresent: true,
};
const slice = createSlice({
  name: 'present',
  initialState: initialValues,
  reducers: {
    setIsPresent: state => {
      state.isPresent = true;
    },
  },
});
const Present = {
  slice,
  setIsPresent: slice.actions.setIsPresent,
};
export const selectIsPresenting = (state: RootState) => state.present.isPresent;
export default Present;
