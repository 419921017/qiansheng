import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtModal, AtModalContent } from "taro-ui";

import "./index.scss";

const Info = props => {
  const [isShowModal, setIsShowModal] = useState(true);

  const renderModal = () => {
    return (
      <View className="render-modal">
        <View className="notice">
          <View className="chinese">提示</View>
          <View className="english">notice</View>
        </View>
        <View className="section-first">
          您已填写赏金信息，为给大家提供一个诚
          信的寻宠环境，如爱宠确实通过他人寻回， 请<Text>按约定支付赏金。</Text>
        </View>
        <View className="section-second">
          同时也提醒您，在<Text>实际见到并确认爱宠</Text>
          前，切勿将赏金打款给对方，如遇到对方要挟等请及时<Text>报警</Text>
          ，由警方陪同一起寻回您的爱宠。
        </View>
        <View className="action" onClick={() => {setIsShowModal(false)}}>
          知道
        </View>
      </View>
    );
  };

  return (
    <View className="page-info">
      <AtModal isOpened={isShowModal} className="page-info-at-modal">
        <AtModalContent>{renderModal()}</AtModalContent>
      </AtModal>
    </View>
  );
};

Info.config = {
  navigationBarTitleText: "丢失宠物发布信息"
};

export default Taro.memo(Info);
