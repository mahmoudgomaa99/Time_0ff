import { EntityKeys } from '../schema';
import { createSlice } from '@reduxjs/toolkit';
import thunks from './thunks';
import { RootState } from '../store';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import * as actions from './actions';

type TInitialValues = {
  currentUser?: any;
  notefications: any[];
};

const initialValues: TInitialValues = {
  currentUser: null,
  notefications: [],
};

const slice = createSlice({
  name: EntityKeys.USERS,
  initialState: initialValues,
  reducers: {
    LOG_OUT: state => {
      state.currentUser = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(thunks.doLogIn.fulfilled, (state, action) => {
      // console.log(action.payload.data.userData, 'lllll');
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
      Toast.show({ type: 'success', text2: action.payload.data.message });
    });
    builder.addCase(thunks.doResetPassword.rejected, (state, action: any) => {
      console.log(action);
      Toast.show({ type: 'error', text2: action.payload.message });
    });
    builder.addCase(thunks.doGetUser.fulfilled, (state, action) => {
      console.log(action.payload.data, 'lllll');
      state.currentUser = action.payload.data;
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
    builder.addCase(thunks.doAddAgency.fulfilled, (state, action) => {
      state.currentUser = action.payload.data.userData;
      console.log(action);
    });
    builder.addCase(thunks.doAddAgency.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(thunks.doUpdateImage.fulfilled, (state, action) => {
      console.log(action);
    });
    builder.addCase(thunks.doUpdateImage.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(actions.logoutAction, (state, action) => {
      state.currentUser = initialValues.currentUser;
    });
    builder.addCase(
      thunks.doGetUserNotefications.fulfilled,
      (state, action) => {
        console.log(action.payload);
        if (action.meta.arg.page === 1) {
          state.notefications = action.payload;
        } else {
          state.notefications = [...state.notefications, ...action.payload];
        }
        console.log(action);
      },
    );
    builder.addCase(thunks.doGetUserNotefications.rejected, (state, action) => {
      console.log(action);
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
export const selectUserNotefications = (state: RootState) =>
  state.users.notefications;
export default User;
