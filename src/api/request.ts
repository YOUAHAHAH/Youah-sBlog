import axios from 'axios';
import {
  handleChangeRequestHeader,
  handleConfigureAuth,
  handleAuthError,
  handleGeneralError,
  handleNetworkError,
  // addPending,
  // removePending,
} from './tools';
import type { Fn, IAnyObj, FcResponse } from './type';

//1. 创建axios对象
const request = axios.create({
  baseURL: 'http://175.178.169.52:8989/',
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  // removePending(config);
  // addPending(config);
  config = handleChangeRequestHeader(config);
  config = handleConfigureAuth(config);
  return config;
});

request.interceptors.response.use(
  (response) => {
    if (response.status !== 200) return Promise.reject(response.data);
    handleAuthError(response.data.errno);
    handleGeneralError(response.data.errno, response.data.errmsg);
    // removePending(response.config);
    return response;
  },
  (err) => {
    handleNetworkError(err.response.status);
    // removePending(err.config);
    Promise.reject(err.response);
  },
);

// Get
export const Get = <T>(
  url: string,
  params: IAnyObj = {},
  clearFn?: Fn,
): Promise<[any, FcResponse<T> | undefined]> =>
  new Promise((resolve) => {
    request
      .get(url, { params })
      .then((result) => {
        let res: FcResponse<T>;
        if (clearFn !== undefined) {
          res = clearFn(result.data) as unknown as FcResponse<T>;
        } else {
          res = result.data as FcResponse<T>;
        }
        resolve([null, res as FcResponse<T>]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });

// Post
export const Post = <T>(
  url: string,
  data: IAnyObj,
  params: IAnyObj = {},
): Promise<[any, FcResponse<T> | undefined]> => {
  return new Promise((resolve) => {
    request
      .post(url, data, { params })
      .then((result) => {
        resolve([null, result.data as FcResponse<T>]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });
};
