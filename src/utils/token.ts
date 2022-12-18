import Cookies from 'js-cookie';

export const tokenKey = 'testToken';

export const getToken = (): string | undefined => {
  return Cookies.get(tokenKey);
};

export const setToken = (token: string): string | undefined => {
  return Cookies.set(tokenKey, token);
};

export const removeToken = (): void => {
  return Cookies.remove(tokenKey);
};

export const existToken = (): boolean => {
  return getToken() !== undefined;
};
