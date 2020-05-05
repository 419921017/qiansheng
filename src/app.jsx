import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";

import "taro-ui/dist/style/index.scss";

import Index from "./pages/index";
import Notice from "./pages/notice";
import Mine from "./pages/mine";

import configStore from "./store";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: [
      "pages/index/index",
      "pages/notice/index",
      "pages/mine/index",
      "pages/location/index",
      "pages/search/index",
      "pages/info/index",
      "pages/pet/index",
      "pages/master/index",
      "pages/adopt/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      // custom: true,
      color: "#000",
      selectedColor: "#E26D65",
      list: [
        {
          pagePath: "pages/index/index",
          iconPath: "./assets/tab/index.png",
          selectedIconPath: "./assets/tab/index-active.png",
          iconWidth: 25,
          text: "首页"
        },
        {
          pagePath: "pages/notice/index",
          iconPath: "./assets/tab/notice.png",
          selectedIconPath: "./assets/tab/notice-acitve.png",
          iconWidth: 25,
          text: "启事栏"
        },
        {
          pagePath: "pages/mine/index",
          iconPath: "./assets/tab/mine.png",
          selectedIconPath: "./assets/tab/mine-active.png",
          iconWidth: 25,
          text: "我的主页"
        }
      ]
    },
    usingComponents: {}
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
