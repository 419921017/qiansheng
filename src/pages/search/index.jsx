import Taro, { useState, useEffect } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtSearchBar } from "taro-ui";

import "./index.scss";

const Search = props => {
  const [value, setValue] = useState("");

  const [hotSearch, setHotSearch] = useState(["狗", "项圈"]);

  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    let res = Taro.getStorageSync("hisotryList");
    if (typeof res === "string") {
      res = JSON.parse(res);
      setHistoryList(res);
    }
    // Taro.setStorageSync("hisotryList", JSON.stringify(["黑色泰迪"]));
  }, []);

  const onChange = searchValue => {
    setValue(searchValue);
  };
  const onActionClick = () => {
    Taro.navigateBack();
  };

  const onConfirm = () => {};
  return (
    <View className="page-search">
      <View className="top-con">
        <AtSearchBar
          className="page-search-bar"
          placeholder="输入地点/特征关键词"
          actionName="取消"
          showActionButton
          value={value}
          onChange={onChange}
          onActionClick={onActionClick}
          onConfirm={onConfirm}
        />
      </View>
      <View className="page-search-hot">
        <View className="hot-title">热门搜索</View>
        <View className="hot-options">
          {hotSearch.map(item => (
            <View className="hot-options-item" key={item}>
              {item}
            </View>
          ))}
        </View>
      </View>
      <View className="page-search-history">
        <View className="history-title">
          <View className="left">搜索历史</View>
          <View className="right">
            <View className="icon-rubbish"></View>
            <View className="right-des">清空</View>
          </View>
        </View>
        <View className="hostory-content">
          {historyList && historyList.length > 0 ? (
            historyList.map(item => (
              <View className="hostory-item" key={item}>
                {item}
              </View>
            ))
          ) : (
            <View className="des">暂无搜索历史</View>
          )}
        </View>
      </View>
    </View>
  );
};

Search.config = {
  navigationBarTitleText: "搜索"
};

export default Taro.memo(Search);
