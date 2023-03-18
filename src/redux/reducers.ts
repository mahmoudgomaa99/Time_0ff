import { combineReducers } from '@reduxjs/toolkit';
import Splash from './Spalsh/SplashSlice';
import tokenReducer from './tokens/reducer';
import User from './user';
import loadingSlice from './_loading';
import Language from './language';
import Present from './Presenting';

const combinedReducer = combineReducers({
  _loading: loadingSlice.reducer,
  tokens: tokenReducer,
  splash: Splash.SplashSlice.reducer,
  [User.slice.name]: User.slice.reducer,
  [Language.slice.name]: Language.slice.reducer,
  [Present.slice.name]: Present.slice.reducer,
});

export default combinedReducer;
