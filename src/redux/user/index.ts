import { EntityKeys } from '../schema';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import thunks from './thunks';
import { RootState } from '../store';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import * as actions from './actions';

type TInitialValues = {
  currentUser?: any;
  isVerified: boolean;
};

const initialValues: TInitialValues = {
  currentUser: null,
  isVerified: false,
};

const slice = createSlice({
  name: EntityKeys.USERS,
  initialState: initialValues,
  reducers: {
    LOG_OUT: () => initialValues,
    setIsVerified: state => {
      state.isVerified = true;
    },
  },
  extraReducers: builder => {},
});

const User = {
  thunks,
  slice,
  logout: slice.actions.LOG_OUT,
  setIsVerified: slice.actions.setIsVerified,
  actions,
};

export const selectCurrentUser = (state: RootState) => state.users.currentUser;
export const selectIsVerefied = (state: RootState) => state.users.isVerified;

export default User;
