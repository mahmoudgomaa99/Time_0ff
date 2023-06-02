import { logoutAction } from 'redux/user/actions';
import Users from '../user';
import { createReducer } from '@reduxjs/toolkit';
import User from '../user';
import { RootState } from 'redux/store';

const initialState = {
  token: null,
};

const tokenReducer = createReducer(initialState, builder => {
  builder
    .addCase(logoutAction, state => {
      state.token = null;
    })
    .addCase(Users.thunks.doLogIn.fulfilled, (state, action) => {
      // console.log(action);
      // if (action.payload.data.status === 0) {
      //   return;
      // }
      if (action.payload.data) {
        const token = action.payload.data.token;
        state.token = token;
        console.log(state.token, 'token');
      }
    })
    .addCase(User.thunks.doSignUp.fulfilled, (state, action) => {
      if (action.payload.data) {
        const token = action.payload.data.token;
        state.token = token;
        console.log(token, 'token');
      }
    });
});
export const selectToken = (state: RootState) => state.tokens.token;
export default tokenReducer;
