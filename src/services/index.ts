import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {ResponseCode} from '../models/response-code';
import {API_URL} from 'const';
import {ErrorCode} from 'models/error';
import {asyncStorageService} from './async-storage';

const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const instance = axios.create({
  headers: defaultHeaders,
});
instance.defaults.baseURL = API_URL;

instance.interceptors.request.use(async (config: any) => {
  try {
    const accessToken = await asyncStorageService.getAccessToken();
    config.headers = {
      ...config.headers,
    };
    if (accessToken) {
      // append token to request headers in case of available access token in async storage
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
  } finally {
    return config;
  }
});

instance.interceptors.response.use(
  response => {
    if (response.data) {
      return response.data;
    }

    return Promise.reject({message: ''});
  },
  async error => {
    if (error?.response?.data?.code === ErrorCode.TokenExpired) {
      return Promise.reject(error);
    }
    if (error?.response?.status === ResponseCode.FAILED_VALIDATION) {
      return Promise.reject(error);
    }
    if (error?.response?.status === ResponseCode.INTERNAL_SERVER_ERROR) {
      return Promise.reject(error);
    }

    //TODO: refresh token
    // return Promise.reject(error);

    return Promise.reject(error);
  },
);

export const get = async (path: string, params: any) => {
  const res = await instance.get(path, {params});
  return res.data;
};

export const post = async (path: string, params: any) => {
  const res = await instance.post(path, params);
  return res;
};

export const postFormData = async (path: string, formData: FormData) => {
  const res = await instance.post(path, formData, {
    headers: {...defaultHeaders, 'Content-Type': 'multipart/form-data'},
  });
  return res;
};

export const put = async (path: string, params: any) => {
  const res = await instance.put(path, params);
  return res;
};

export const del = async (path: string, param: any) => {
  const res = await instance.delete(path, param);
  return res;
};
