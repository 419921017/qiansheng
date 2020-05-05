import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";

const Pet = props => {
  return <View>Search</View>;
};

Pet.config = {
  navigationBarTitleText: "寻宠启事"
};

export default Taro.memo(Pet);
