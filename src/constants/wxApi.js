import getBaseUrl from "./baseUrl";

const baseUrl = getBaseUrl();

// 获取微信授权
export const API_WX_LOGIN = `${baseUrl}/mp/mpOAuth`;

//获取通法用户信息
export const API_USER_USERINFO_BY_TOKEN = `${baseUrl}/user/getUserInfo`;
