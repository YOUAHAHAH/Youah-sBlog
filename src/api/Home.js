import service from "../utils/request";

// banner
export const HomeBanner = () => {
  return service.get(`/api/cardList`);
};
