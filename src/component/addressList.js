/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, TouchableHighlight, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class App extends Component {

  render() {
    return (
        <View style={styles.listItem}>
            <Text> {this.props.address.address} </Text>
            <Text> {this.props.address.latitude}, {this.props.address.latitude} </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
      listItem:{
        backgroundColor: '#FFFFFF',
        margin:8,
        padding:8,
        borderBottomWidth  :2,
        borderBottomColor :'gray'
      }
});
