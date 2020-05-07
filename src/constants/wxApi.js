import getBaseUrl from "@/http/baseUrl";

const baseUrl = getBaseUrl();

// 获取微信授权
export const API_WX_LOGIN = `api/sys/oauth`;

// 获得token
export const getToken = `api/sys/createToken`

//获取通法用户信息
export const API_USER_USERINFO_BY_TOKEN = `${baseUrl}/user/getUserInfo`;
