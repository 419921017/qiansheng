import Taro, { useState } from "@tarojs/taro";
import { AtTabBar } from "taro-ui";

const CustomTabBar = props => {
  const [current, setCurrent] = useState(0);

  const handleClick = value => {
    setCurrent(value);
  };
  return (
    <AtTabBar
      tabList={[
        { title: "待办事项", text: 8 },
        { title: "拍照" },
        { title: "通讯录", dot: true }
      ]}
      onClick={handleClick}
      current={current}
    />
  );
};

CustomTabBar.pages = [
  "pages/index/index",
  "pages/notice/index",
  "pages/mine/index"
];

CustomTabBar.tabBar = {};

export default Taro.memo(CustomTabBar);
