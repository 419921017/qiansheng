import Taro from "@tarojs/taro";
import { View, Map } from "@tarojs/components";

const Location = props => {
  const mapKey = "5WBBZ-3CEEF-NSXJ2-JAMGE-WVDPS-QDBF4";
  return (
    <View className="">
      <Map style="width: 100vw; height: 100vh" show-location subkey={mapKey}></Map>
    </View>
  );
};

Location.config = {
  navigationBarTitleText: "定位"
};

export default Taro.memo(Location);
