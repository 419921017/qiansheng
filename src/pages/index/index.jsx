import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import Modal from "@components/WXLoginModal";
import classnames from "classnames";

// import { connect } from "@tarojs/redux";

// import NavBar from "taro-navigationbar";
// import { add, minus, asyncAdd } from "../../actions/counter";
import SearchBar from "@components/SearchBar";
import List from "@components/List";

import { getUserInfo, getIsAuth, weappLogin } from "@/utils/wxLogin";
import { businessBanner } from "@/api/indexPage";

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
  const [animationClass, setAnimationClass] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);

  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    showLoginModal();
    getBusinessBanner();
  }, []);

  const hideAuthModal = () => {
    setShowAuthModal(false);
    Taro.setStorageSync("isHomeLongHideAuthModal", true);
  };
  const handleToRoute = route => {
    Taro.navigateTo({
      url: `/pages/${route}/index`
    });
  };

  const prcoessAuthResult = async userData => {
    Taro.setStorageSync("isHomeLongHideAuthModal", true);
    console.log("userData", userData);
    if (userData && userData.userInfo) {
      await weappLogin();
    }

    setShowAuthModal(false);
  };

  const showLoginModal = () => {
    setTimeout(async () => {
      const userData = await getUserInfo();
      console.log("showLoginModal", userData);
      try {
        const res = Taro.getStorageSync("isHomeLongHideAuthModal");
        const isHomeLongHideAuthModal = res.data;

        let showAuthModal;
        if (!userData.userInfo && !showAuthModal && !isHomeLongHideAuthModal) {
          showAuthModal = true;
        } else {
          showAuthModal = false;
        }
        console.log("showAuthModal", showAuthModal);
        setShowAuthModal(showAuthModal);
        setAnimationClass("animation");
      } catch (error) {
        let showAuthModal;
        if (!userData && !showAuthModal) {
          showAuthModal = true;
        } else {
          showAuthModal = false;
        }
        console.log("showAuthModal", showAuthModal);

        setShowAuthModal(showAuthModal);
        setAnimationClass("animation");
      }
    }, 1000);
    getIsAuth();
  };

  const getBusinessBanner = () => {
    businessBanner()
      .then(res => {
        res && res.data && setBannerList(res.data);
      })
      .catch(() => {
        setBannerList([]);
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
        {bannerList &&
          bannerList.length > 0 &&
          bannerList.map(item => {
            return (
              <SwiperItem key={item.path}>
                <View className="swiper-item-con">
                  <Image src={item.path}></Image>
                </View>
              </SwiperItem>
            );
          })}
      </Swiper>
    );
  };

  const indexClassNames = classnames("index-container", animationClass);

  return (
    <View className={indexClassNames}>
      {showAuthModal && (
        <Modal
          title="授权提示"
          contentText="牵绳邀您完成授权，寻宠寻主领养活动!"
          onCancelCallback={hideAuthModal}
          onConfirmCallback={prcoessAuthResult}
          isAuth
        />
      )}
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
