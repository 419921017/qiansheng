import Taro from "@tarojs/taro";
import api from "./../http";
import { API_WX_LOGIN, API_USER_USERINFO_BY_TOKEN } from "./../constants/api";
import { getGlobalData } from "../constants/globalData.js";

// const appid = "wx89e40641d50b0da9";
// const secret = "6a158f77c8f2792f3c0a4e8f7f996884";
const getUserInfo = async () => {
  const userData = Taro.getStorageSync("userData");
  if (userData) {
    return userData;
  }
  try {
    const userInfoData = await Taro.getUserInfo();
    Taro.setStorage({ key: "userData", data: userInfoData });
    return userInfoData;
  } catch (err) {
    console.log(err);
    console.log("微信登录或用户接口故障");
    return {};
  }
};

/**
 * @summary 后端接口的用户信息
 */
const getUserInfoByToken = async () => {
  const userInfoByToken = Taro.getStorageSync("userInfoByToken");
  console.log("userInfoByToken", userInfoByToken);
  if (userInfoByToken) {
    return userInfoByToken;
  }
  try {
    const userInfoByTokenData = await api.get(API_USER_USERINFO_BY_TOKEN, {});
    console.log("userInfoByTokenData", userInfoByTokenData);

    Taro.setStorage({
      key: "userInfoByToken",
      data: userInfoByTokenData.data
    });
    return userInfoByTokenData;
  } catch (e) {
    console.log(e);
    console.log("通法登录获取用户信息接口故障");
    return {};
  }
};

const weappLogin = async (
  before: () => void = () => {},
  success: () => void = () => {},
  after: any => void = () => {}
) => {
  before();
  try {
    const { userInfo } = await getUserInfo();
    const { code } = await Taro.login();
    console.log("weappLogin-userInfo", userInfo);
    console.log("weappLogin-code", code);

    if (code) {
      Taro.setStorageSync("code", code);
      api
        .post(API_WX_LOGIN, {
          code,
          ...userInfo
        })
        .then(wxLoginRes => {
          console.log("wxLoginRes", wxLoginRes);
          const {
            data: { token }
          } = wxLoginRes;
          console.log("token", token);
          Taro.setStorageSync("Authorization", token);
          getUserInfoByToken();
          success();
          return token;
        })
        .catch(wxLoginErr => {
          after(wxLoginErr);
          console.log("wxLoginErr", wxLoginErr);
        });
    } else {
      return null;
    }
  } catch (e) {
    after(e);
    return null;
  }
};

const getOpenId = async () => {
  let openId;
  try {
    openId = Taro.getStorageSync("taro_demo_openid");
  } catch (error) {
    console.log(error);
  }
  if (openId) {
    return openId;
  } else {
    const res = await Taro.cloud.callFunction({
      name: "user",
      data: {
        func: "getOpenId"
      }
    });
    const openId = res.result.data.openId;
    Taro.setStorage({ key: "taro_demo_openid", data: openId });
    return openId;
  }
};

const getIsAuth = async () => {
  // const openid = await getOpenId();
  let { userInfo } = await getUserInfo();
  console.log("getIsAuthuserInfo", userInfo);
  let isAuth = false;
  if (userInfo) {
    userInfo.isAuth = true;
    // userInfo._id = openid;
    isAuth = true;
  } else {
    // userInfo = {
    //   // _id: openid,
    //   isAuth: false
    // };
    userInfo = {
      isAuth: false
    };
  }
  // await wx.cloud.callFunction({
  //   name: "user",
  //   data: {
  //     func: "addUser",
  //     data: userInfo
  //   },
  //   success: res => {
  //     // console.log(res)
  //   },
  //   fail: res => {
  //     // console.log(res)
  //   }
  // });

  return isAuth;
};

const getH5UniqueId = async () => {
  if (process.env.TARO_ENV !== "weapp") {
    return new Promise((resolve, reject) => {
      Taro.getStorage({
        key: "Taro_h5_demo_uid",
        success({ data }) {
          if (!data) {
            const h5Id = `user_${Math.random()
              .toString(36)
              .substr(2)}`;
            Taro.setStorage({ key: "Taro_h5_demo_uid", data: h5Id });
            const addUser = require("../leancloud/user/addUser").addUser;
            addUser(h5Id)
              .then(res => {
                Taro.setStorage({ key: "Taro_h5_demo_objectId", data: res.id });
                resolve(h5Id);
              })
              .catch(reject);
          } else {
            resolve(data);
          }
        },
        fail() {
          const h5Id = `user_${Math.random()
            .toString(36)
            .substr(2)}`;
          Taro.setStorage({ key: "Taro_h5_demo_uid", data: h5Id });
          const addUser = require("../leancloud/user/addUser").addUser;
          addUser(h5Id)
            .then(res => {
              Taro.setStorage({ key: "Taro_h5_demo_objectId", data: res.id });
              resolve(h5Id);
            })
            .catch(reject);
        }
      });
    });
  } else {
    return null;
  }
};

export {
  getUserInfo,
  getOpenId,
  getIsAuth,
  getH5UniqueId,
  getUserInfoByToken,
  weappLogin
};
