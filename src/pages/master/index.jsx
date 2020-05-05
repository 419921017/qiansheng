import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";

const Master = props => {
  return <View>Search</View>;
};

Master.config = {
  navigationBarTitleText: "寻主启事"
};

export default Taro.memo(Master);
