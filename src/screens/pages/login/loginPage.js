import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';
import theme from '../../../utils/theme';
import { Text, PrimaryButton } from '../../../components';
import { SET_WALLET_ADDRESS, SIGN_IN } from '../../../config/actionTypes';
import uuid from 'react-native-uuid';
import { connect } from 'react-redux';
import { store } from '../../../config/store';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: '',
      phoneNum: '',
      password: '',
    };
  }

  signIn() {
    let sessionId = uuid.v4();
    store.dispatch({
      type: SIGN_IN,
      sessionId: sessionId,
    });
    this.props.navigation.navigate('tabs');
  }

  render() {
    console.log(this.props);
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={{ margin: 10, fontSize: 20, color: 'black' }}>搜索</Text>
        </TouchableOpacity>
        <TextInput
          ref="phoneNum"
          style={styles.textInput}
          onChangeText={phoneNum => this.setState({ phoneNum })}
          placeholder="account"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={6}
          underlineColorAndroid="transparent"
        />
        <TextInput
          ref="passWord"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          placeholder="  password"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          maxLength={6}
          underlineColorAndroid="transparent"
        />
        <View>
          <PrimaryButton onPress={() => this.signIn()} text="sign in" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  textInput: {
    height: 30,
    padding: 0,
    width: theme.screenWidth * 0.9,
    fontSize: 20,
    color: '#000',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
const mapDispatchToProps = dispatch => ({
  dismissCallToAction: () => dispatch({ type: SIGN_IN }),
});

export default connect(mapDispatchToProps)(LoginPage);
