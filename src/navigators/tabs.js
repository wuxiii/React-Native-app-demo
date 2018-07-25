import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../utils/theme';
import SplashPage from '../components/SplashPage';
import IndexPage from '../screens/pages/IndexPage';
import CategoryPage from '../screens/pages/CategoryPage';
import BrandPage from '../screens/pages/BrandPage';
import CartPage from '../screens/pages/CartPage';
import MyPage from '../screens/pages/MyPage';
import CustomTabBar from '../screens/pages/component/CustomTabBar';
import SearchPage from '../screens/pages/SearchPage';

const CategoryTab = createMaterialTopTabNavigator(
  {
    CategoryPage: {
      screen: CategoryPage,
      navigationOptions: {
        tabBarLabel: '品类',
      },
    },
    BrandPage: {
      screen: BrandPage,
      navigationOptions: {
        tabBarLabel: '品牌',
      },
    },
  },
  {
    swipeEnabled: true, // 允许左右滑动
    animationEnabled: true, //切换页面时显示动画
    backBehavior: 'none',
    tabBarOptions: {
      // tabbar上label的style
      labelStyle: {},
      // tabbar的style
      style: {
        height: theme.actionBar.height + theme.barContentPad, //修改高度
        marginHorizontal: theme.screenWidth / 6,
        paddingTop: theme.barContentPad, //不同平台高度不一样
        backgroundColor: '#fff',
        elevation: 0, //组件的高度为0 就没有阴影了
        shadowOpacity: 0, //阴影完全透明
      },
      // 每个选项卡的样式
      tabStyle: {
        width: (theme.screenWidth * 1) / 3,
      },
      // label和icon的背景色 活跃状态下
      activeBackgroundColor: '#fff',
      // label和icon的前景色 活跃状态下（选中）
      activeTintColor: theme.primaryColor,
      // label和icon的背景色 不活跃状态下
      inactiveBackgroundColor: '#fff',
      // label和icon的前景色 不活跃状态下(未选中)
      inactiveTintColor: theme.lightBlack,
      showIcon: false, //是否显示 Icon
      // 是否显示label，默认为true
      showLabel: true,
      // 按下选项卡的透明度(iOS和Android < 5.0)
      pressOpacity: 0.3,
      indicatorStyle: {
        // Tabbar下划线样式
        height: 2,
        width: theme.screenWidth / 9,
        backgroundColor: theme.primaryColor,
        left: theme.screenWidth / 9,
      },
    },
    //自定义 TabBar
    tabBarComponent: props => <CustomTabBar {...props} />,
  },
);
const MyTab = createBottomTabNavigator(
  {
    IndexPage: {
      screen: IndexPage,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name={`ios-home${focused ? '' : '-outline'}`}
            size={25}
            color={tintColor}
          />
        ),
      },
    },
    CategoryTab: {
      screen: CategoryTab,
      navigationOptions: {
        tabBarLabel: '分类',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name={`ios-apps${focused ? '' : '-outline'}`}
            size={25}
            color={tintColor}
          />
        ),
      },
    },
    CartPage: {
      screen: CartPage,
      navigationOptions: {
        tabBarLabel: '购物车',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name={`ios-cart${focused ? '' : '-outline'}`}
            size={25}
            color={tintColor}
          />
        ),
      },
    },
    MyPage: {
      screen: MyPage,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name={`ios-person${focused ? '' : '-outline'}`}
            size={25}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      // label和icon的前景色 活跃状态下（选中）
      activeTintColor: theme.primaryColor,
      // label和icon的背景色 不活跃状态下
      inactiveBackgroundColor: theme.lightGray,
      // label和icon的前景色 不活跃状态下(未选中)
      inactiveTintColor: theme.lightBlack,
    },
  },
);
const Tabs = createStackNavigator(
  {
    SplashPage: {
      screen: SplashPage,
      navigationOptions: {
        gesturesEnabled: true,
        header: null,
      },
    },
    MyTab: {
      screen: MyTab,
      navigationOptions: {
        gesturesEnabled: true,
        header: null,
      },
    },
    SearchPage: {
      screen: SearchPage,
      navigationOptions: {
        gesturesEnabled: true,
        header: null,
      },
    },
  },
  {
    mode: 'card',
    headerMode: 'none',
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
  },
);

export default Tabs;
