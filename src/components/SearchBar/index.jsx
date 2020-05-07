import Taro, {} from "@tarojs/taro";
import { View } from "@tarojs/components";
import { useSelector } from "@tarojs/redux";

import "./index.scss";

const SearchBar = props => {
  console.log(props);
  const location = useSelector(state => state.location);
  const { locationName = "" } = location;

  const handleToRoute = route => {
    Taro.navigateTo({
      url: `/pages/${route}/index`
    });
  };

  return (
    <View className="search-bar">
      <View
        className="left"
        onClick={() => {
          handleToRoute("location");
        }}
      >
        <View>{locationName}</View>
        <View className="down-icon"></View>
      </View>
      <View
        className="right"
        onClick={() => {
          handleToRoute("search");
        }}
      >
        <View className="input-con">
          <View className="icon-search"></View>
          <View>输入地点/特征关键词</View>
        </View>
        <View className="search-con">搜索</View>
      </View>
    </View>
  );
};

export default Taro.memo(SearchBar);
