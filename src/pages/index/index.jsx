import Taro from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
// import { connect } from "@tarojs/redux";

// import NavBar from "taro-navigationbar";
// import { add, minus, asyncAdd } from "../../actions/counter";
import SearchBar from "./../../components/SearchBar";
import List from "./../../components/List";
import info from "./../../assets/index/info.png";
import pet from "./../../assets/index/pet.png";
import master from "./../../assets/index/master.png";
import adopt from "./../../assets/index/adopt.png";

import "./index.scss";

const tabLinkList = [
  {
    title: "发布信息",
    url: "info",
    img: info
  },
  {
    title: "寻宠启事",
    url: "pet",
    img: pet
  },
  {
    title: "寻主启事",
    url: "master",
    img: master
  },
  {
    title: "领养活动",
    url: "adopt",
    img: adopt
  }
];

const Index = props => {
  const handleToRoute = route => {
    Taro.navigateTo({
      url: `/pages/${route}/index`
    });
  };
  const renderSwiper = () => {
    return (
      <Swiper
        className="test-h"
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <View className="swiper-item-con">1</View>
        </SwiperItem>
        <SwiperItem>
          <View className="swiper-item-con">2</View>
        </SwiperItem>
        <SwiperItem>
          <View className="swiper-item-con">3</View>
        </SwiperItem>
      </Swiper>
    );
  };

  return (
    <View className="index-container">
      <View className="search-con">
        <SearchBar />
      </View>
      <View className="swiper-con">{renderSwiper()}</View>

      <View className="tab-link-con">
        {tabLinkList.map(item => (
          <View
            key={item.title}
            className="tab-link-item"
            onClick={() => {
              handleToRoute(item.url);
            }}
          >
            <Image className="pic" src={item.img} />
            <View className="des">{item.title}</View>
          </View>
        ))}
      </View>
      <View className="warning">
        <View className="clock"></View>
        <View className="text">别着急，请先看看【寻宠技巧】更快找到ta</View>
      </View>
      <View className="sign">
        <View className="sign-left">Missing Pets</View>
        <View className="sign-right">they need your help</View>
      </View>
      <View className="list">
        <List />
      </View>
    </View>
  );
};

Index.config = {
  navigationBarTitleText: "牵绳"
  // navigationStyle: "custom"
};

// @connect(
//   ({ counter }) => ({
//     counter
//   }),
//   dispatch => ({
//     add() {
//       dispatch(add());
//     },
//     dec() {
//       dispatch(minus());
//     },
//     asyncAdd() {
//       dispatch(asyncAdd());
//     }
//   })
// )
// class Index extends Component {
//   config = {
//     navigationBarTitleText: "首页"
//   };

//   componentWillReceiveProps(nextProps) {
//     console.log(this.props, nextProps);
//   }

//   componentWillUnmount() {}

//   componentDidShow() {}

//   componentDidHide() {}

//   render() {
//     return (
//       <View className="index">
//         <Button className="add_btn" onClick={this.props.add}>
//           +
//         </Button>
//         <Button className="dec_btn" onClick={this.props.dec}>
//           -
//         </Button>
//         <Button className="dec_btn" onClick={this.props.asyncAdd}>
//           async
//         </Button>
//         <View>
//           <Text>{this.props.counter.num}</Text>
//         </View>
//         <View>
//           <Text>Hello, World</Text>
//         </View>
//       </View>
//     );
//   }
// }

export default Taro.memo(Index);
