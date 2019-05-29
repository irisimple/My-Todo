/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import Settings from './../more/settings';
import Addresses from './../more/address';
import AddAddress from './../more/addAddress';
import More from './../more/index';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StackNavigator = createStackNavigator({
  More:{
    screen:More
  },
  Settings : {
    screen: Settings
  },
  Addresses: {
    screen: Addresses
  },
  AddAddress: {
    screen: AddAddress
  }
},{
    headerMode:'none'
})

export default createAppContainer(StackNavigator);