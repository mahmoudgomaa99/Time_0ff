import { createAsyncThunk } from '@reduxjs/toolkit';
import UserAPI from './API';
import { log } from 'react-native-reanimated';

const doLogIn = createAsyncThunk<any, any, any>(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await UserAPI.LogIn(data);
      console.log(response, 'ooooo');
      if (response.status === 401) {
        throw response.data;
      } else {
        return { data: response.data };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doSignUp = createAsyncThunk<any, any, any>(
  'user/signup',
  async (data, { rejectWithValue }) => {
    try {
      const response = await UserAPI.SignUp(data);
      console.log('response', response);
      if (response.status === 400) {
        throw response.data;
      } else {
        return { data: response.data };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doForgetPassword = createAsyncThunk<any, any, any>(
  'user/forget',
  async (data, { rejectWithValue }) => {
    try {
      const response = await UserAPI.ForgetPassword(data);
      if (response.status === 401) {
        throw response.data;
      } else {
        return { data: response.data };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doResetPassword = createAsyncThunk<any, any, any>(
  'user/reset',
  async (data, { rejectWithValue }) => {
    try {
      const response = await UserAPI.ResetPassword(data);
      if (response.status === 403) {
        throw response.data;
      } else {
        return { data: response.data };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doGetUser = createAsyncThunk<any, any, any>(
  'user/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserAPI.GetUser();
      if (response.status === 403) {
        throw response.data;
      } else {
        return { data: response.data };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doUpdateUser = createAsyncThunk<any, any, any>(
  'user/updateUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await UserAPI.UpdateUser(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doAddAgency = createAsyncThunk<any, any, any>(
  'journeys/addAgency',
  async (data, { rejectWithValue }) => {
    try {
      const response = await UserAPI.AddAgency(data);
      if (response.status === 403) {
        throw response.data;
      } else {
        return { data: response };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doUpdateImage = createAsyncThunk<any, any, any>(
  'user/updateImage',
  async (data, { rejectWithValue }) => {
    try {
      const response = await UserAPI.UpdateMyImage(data);
      console.log('response', response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doGetUserNotefications = createAsyncThunk<any, any, any>(
  'user/notefications',
  async (data, { rejectWithValue }) => {
    try {
      const response = await UserAPI.GetUserNotefications(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const doGetCategories = createAsyncThunk<any, any, any>(
  'user/categories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserAPI.getCategories();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const doGetAds = createAsyncThunk<any, any, any>(
  'user/ads',
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserAPI.getAds();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const thunks = {
  doForgetPassword,
  doGetUser,
  doLogIn,
  doSignUp,
  doResetPassword,
  doUpdateUser,
  doAddAgency,
  doUpdateImage,
  doGetUserNotefications,
  doGetCategories,
  doGetAds,
};

export default thunks;
