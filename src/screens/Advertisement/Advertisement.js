import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import PercentageCircle from './CircleAnimation';

export default class Advertisement extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 4, showWebView: false };
    this.timer = null;
  }

  checkTimer = () => {
    let { time } = this.state;
    time = time - 0.1;
    if (time < 0) {
      this.goHome();
    } else {
      this.timer = setTimeout(this.checkTimer, 100);
      this.setState({ time });
    }
  };
  componentDidMount() {
    this.checkTimer();
    // this.reloadData();
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.gotoUrl}>
          <Image
            source={require('../../components/SplashPage/images/launch.png')}
            style={styles.image}
          />
        </TouchableWithoutFeedback>
        <View style={styles.timeView}>{this.percentageCircle()}</View>
      </View>
    );
  }
  gotoUrl = () => {
    //jump to ad.
  };
  goHome = () => {};

  componentWillUnMount() {
    this.timer && clearTimeout(this.timer);
  }

  load = () => {
    // alert('加载成功')
  };

  percentageCircle = () => {
    let percent = (4 - this.state.time) * 25;
    return (
      <PercentageCircle radius={17} percent={percent} color={'#FF4500'}>
        <Text style={styles.text} onPress={this.goHome}>
          {' '}
          跳过{' '}
        </Text>
      </PercentageCircle>
    );
  };
}

const styles = StyleSheet.create({
  timeView: {
    right: 15,
    top: 25,
    position: 'absolute',
    zIndex: 10001,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  text: {
    left: 0,
    top: 8,
    width: 30,
    height: 30,
    position: 'absolute',
    fontSize: 11,
    zIndex: 10001,
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 10000,
    left: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonWarp: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
