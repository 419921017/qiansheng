import api from "@/http";

// 小程序授权
export const oauth = params => {
  return api.post("api/sys/oauth", params);
};

// 刷新token
export const refreshToken = params => {
  return api.post("api/sys/refreshToken", params);
};
