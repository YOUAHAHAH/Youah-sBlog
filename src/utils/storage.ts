export const LocalStore = (name: string, value: any) => {
  return;
};

export const setSessionStore = (name: string, value: any) => {
  return sessionStorage.setItem(name, JSON.stringify(value));
};

export const getSessionStore = (name: string) => {
  return JSON.parse(sessionStorage.getItem(name) as string);
};

export const removeSessionStore = (name: string): void => {
  return sessionStorage.removeItem(name);
};
