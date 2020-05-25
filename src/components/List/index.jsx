import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";

import "./index.scss";

// const listData = [
//   {
//     title: "",
//     category: "柯基",
//     age: 3,
//     address: "安静西路",
//     distance: "153m",
//     time: "54分钟前",
//     img:
//       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583254748694&di=de7af69bfa61fac06dba8acaa7cebda4&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F25%2F20160425122309_G8xB3.jpeg"
//   },
//   {
//     title: "",
//     category: "柯基",
//     age: 3,
//     address: "安静西路",
//     distance: "153m",
//     time: "54分钟前",
//     img:
//       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583254748694&di=de7af69bfa61fac06dba8acaa7cebda4&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F25%2F20160425122309_G8xB3.jpeg"
//   },
//   {
//     title: "",
//     category: "柯基",
//     age: 3,
//     address: "安静西路",
//     distance: "153m",
//     time: "54分钟前",
//     img:
//       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583254748694&di=de7af69bfa61fac06dba8acaa7cebda4&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F25%2F20160425122309_G8xB3.jpeg"
//   },
//   {
//     title: "",
//     category: "柯基",
//     age: 3,
//     address: "安静西路",
//     distance: "153m",
//     time: "54分钟前",
//     img:
//       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583254748694&di=de7af69bfa61fac06dba8acaa7cebda4&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F25%2F20160425122309_G8xB3.jpeg"
//   }
// ];

const List = props => {
  const { list } = props;
  const renderListItem = item => {
    return (
      <View className="list-item-con" key={item.id}>
        <View className="list-item">
          <View className="con-left">
            <View className="title">
              {/* 寻宠启事: {item.category}, {item.age}岁, {item.address} */}
              {item.content}
            </View>
            <View className="distance">距离你 {item.distance}</View>
            <View className="time">已查看 {item.view_number} 次</View>
          </View>
          <View className="con-right">
            <Image
              className="pic"
              mode="aspectFit"
              style={{ height: "100%", width: "100%" }}
              src={item.image}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View className="list-con">
      {list &&
        list.length > 0 &&
        list.map((item, i) => <View key={i}>{renderListItem(item, i)}</View>)}
    </View>
  );
};

export default Taro.memo(List);
