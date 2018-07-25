import React, { Component } from 'react';
import { Image, StatusBar, View } from 'react-native';
import theme from '../../utils/theme';

export default class SplashPage extends Component {
  componentDidMount() {
    // 定时跳转到下一个页面
    this.timer = setTimeout(() => {
      this.props.navigation.replace('MyTab');
      this.timer && clearTimeout(this.timer);
    }, 1000);
  }

  render() {
    return (
      <View>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <Image
          style={{ width: theme.screenWidth, height: theme.screenHeight }}
          source={require('./images/launch.png')}
          resizeMode="cover"
        />
      </View>
    );
  }
}
