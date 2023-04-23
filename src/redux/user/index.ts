import { EntityKeys } from '../schema';
import { createSlice } from '@reduxjs/toolkit';
import thunks from './thunks';
import { RootState } from '../store';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import * as actions from './actions';
import { data } from '../../screens/App/Settings/Components/Card/data';

type TInitialValues = {
  currentUser?: any;
};

const initialValues: TInitialValues = {
  currentUser: null,
};

const slice = createSlice({
  name: EntityKeys.USERS,
  initialState: initialValues,
  reducers: {
    LOG_OUT: () => initialValues,
  },
  extraReducers: builder => {
    builder.addCase(thunks.doLogIn.fulfilled, (state, action) => {
      state.currentUser = action.payload.data.userData;
    });
    builder.addCase(thunks.doLogIn.rejected, (state, action: any) => {
      Toast.show({ type: 'error', text2: action.payload.message });
    });
    builder.addCase(thunks.doSignUp.fulfilled, (state, action) => {
      state.currentUser = action.payload.data.userData;
    });
    builder.addCase(thunks.doSignUp.rejected, (state, action: any) => {
      console.log(action);
      Toast.show({ type: 'error', text2: action.payload.message });
    });
    builder.addCase(thunks.doForgetPassword.fulfilled, (state, action) => {
      Toast.show({ type: 'success', text2: action.payload.data.message });
      console.log(action.payload.data.message);
    });
    builder.addCase(thunks.doForgetPassword.rejected, (state, action: any) => {
      console.log(action);
      Toast.show({ type: 'error', text2: action.payload.message });
    });
    builder.addCase(thunks.doResetPassword.fulfilled, (state, action) => {
      console.log(action);
    });
    builder.addCase(thunks.doResetPassword.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(thunks.doGetUser.fulfilled, (state, action) => {
      console.log(action);
    });
    builder.addCase(thunks.doGetUser.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(thunks.doUpdateUser.fulfilled, (state, action) => {
      Toast.show({ type: 'success', text2: action.payload.message });
      state.currentUser = action.payload.userData;
      console.log(action);
    });
    builder.addCase(thunks.doUpdateUser.rejected, (state, action: any) => {
      console.log(action);
      Toast.show({ type: 'error', text2: action.payload.message });
    });
  },
});

const User = {
  thunks,
  slice,
  logout: slice.actions.LOG_OUT,
  actions,
};

export const selectCurrentUser = (state: RootState) => state.users.currentUser;

export default User;
