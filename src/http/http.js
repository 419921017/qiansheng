import Taro from "@tarojs/taro";
import getBaseUrl from "./baseUrl";
import interceptors from "./interceptors";

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem));

/** HTTP 请求方法 */
// interface method {
//   /** HTTP 请求 OPTIONS */
//   OPTIONS
//   /** HTTP 请求 GET */
//   GET
//   /** HTTP 请求 HEAD */
//   HEAD
//   /** HTTP 请求 POST */
//   POST
//   /** HTTP 请求 PUT */
//   PUT
//   /** HTTP 请求 DELETE */
//   DELETE
//   /** HTTP 请求 TRACE */
//   TRACE
//   /** HTTP 请求 CONNECT */
//   CONNECT
// }

// interface ResponseResult {
//   code: string | number
//   msg: string
//   debugMsg: any
//   data: object
// }

class httpRequest {
  baseOptions(params, method) {
    let { url, data } = params;
    const BASE_URL = getBaseUrl(url);
    let contentType = "application/json";
    contentType = params.contentType || contentType;
    method = method || "GET";
    const option = {
      url: BASE_URL + url,
      data: data,
      method,
      header: {
        "content-type": contentType,
        Authorization: Taro.getStorageSync("Authorization")
      }
    };
    console.log(option);
    return Taro.request(option);
  }

  get(url, data) {
    let option = { url, data };
    return this.baseOptions(option);
  }

  post(url, data, contentType) {
    let params = { url, data, contentType };
    return this.baseOptions(params, "POST");
  }

  put(url, data = "") {
    let option = { url, data };
    return this.baseOptions(option, "PUT");
  }

  delete(url, data = "") {
    let option = { url, data };
    return this.baseOptions(option, "DELETE");
  }
}

export default new httpRequest();
