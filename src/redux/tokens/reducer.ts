import { logoutAction } from 'redux/user/actions';
import Users from '../user';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

const tokenReducer = createReducer(initialState, builder => {
  builder.addCase(logoutAction, state => {
    state.token = null;
  });
  // .addCase(Users.thunks.doSignIn.fulfilled, (state, action) => {
  //   if (action.payload.data.status === 0) {
  //     return;
  //   }
  //   if (action.payload.data.data) {
  //     const token = action.payload.data.data.token;
  //     state.token = token;
  //     console.log(state.token);
  //   }
  // });
});

export default tokenReducer;
