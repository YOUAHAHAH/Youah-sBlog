import service from "../utils/request";

// banner
export const HomeBanner = () => {
  return service.get(`/api/banner`);
};

// userInfo
export const HomeUserInfo = () => {
  return service.get(`/api/userInfo`);
};

// pageList
export const HomePageList = (data) => {
  return service.post(`/api/pages`, data);
};
