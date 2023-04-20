import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { TStore } from './store';
import assign from 'lodash/assign';
import env from '../../.env.json';
import { create } from 'apisauce';

export const api = create({
  baseURL: env.BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
export type TTokenKeys = {
  [K in TokenKeys]: any;
};

export enum TokenKeys {
  TOKEN = 'token',
}

const initAxios = (store: TStore) => {
  api.axiosInstance.interceptors.request.use(config => {
    const tokens = store.getState().tokens;
    const authorization = `Bearer ${tokens.token}`;
    const authHeaders = { authorization };
    if (tokens.token) {
      assign(config.headers, authHeaders);
    }
    return config;
  });
  const injectAuthHeaders: any = (config: AxiosRequestConfig) => {
    const tokens = store.getState().tokens;
    const authorization = `Bearer ${tokens.token}`;
    const authHeaders = { authorization };
    assign(config.headers, authHeaders);
    return config;
  };

  const unautherizedHandling = (error: AxiosError) => {
    const { status, data } = (error?.response as any) || {};
    //error handling
  };

  const handleFormData: any = (config: AxiosRequestConfig) => {
    if (config.data instanceof FormData) {
      assign(config.headers, {
        'Content-Type': 'multipart/form-data',
      });
    }
    return config;
  };

  axios.defaults.baseURL = env.BASE_URL;
  axios.interceptors.request.use(injectAuthHeaders);
  axios.interceptors.response.use(undefined, error => {
    unautherizedHandling(error);
    return Promise.reject(error?.response);
  });
  axios.interceptors.request.use(handleFormData);
};

export default initAxios;
