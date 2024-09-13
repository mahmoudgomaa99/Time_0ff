import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

const slice = createSlice({
  name: 'userType',
  initialState: { userType: undefined },
  reducers: {
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
  },
});
export const UserType = {
  slice,
  setUserData: slice.actions.setUserType,
};
export const selectUserType = (state: RootState) => state.userType.userType;
