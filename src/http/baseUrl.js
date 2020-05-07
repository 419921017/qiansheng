const getBaseUrl = (url = "") => {
  let BASE_URL = "";
  // if (process.env.NODE_ENV === "development") {
  //开发环境 - 根据请求不同返回不同的BASE_URL
  // if (url.includes('/api-')) {
  //   BASE_URL = 'http://localhost:3001'
  //   // BASE_URL = 'http://111.230.249.40:8080'
  // } else if (url.includes('/iatadatabase/')) {
  //   BASE_URL = ''
  // }

  // 生产环境
  // if (url.includes("/api/")) {
  //   BASE_URL = "";
  // } else if (url.includes("/iatadatabase/")) {
  //   BASE_URL = "";
  // }
  // }
  BASE_URL = "http://111.229.169.136/index.php/";

  // if (url) {
  //   return BASE_URL + url;
  // }
  return BASE_URL;
};

export default getBaseUrl;
