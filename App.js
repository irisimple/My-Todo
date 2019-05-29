/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import Home from './src/home';
import Inbox from './src/inbox';
import History from './src/history';
import More from './src/more/index';
import StackNavigator from './src/routes/stacknavigator';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator({
  Home : {
    screen: Home
  },
  Inbox: {
    screen: Inbox,
  },
  History:{
    screen: History
  },
  More:{
    screen: StackNavigator
  }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Inbox') {
        iconName = `ios-options`;
      } else if (routeName === 'History') {
        iconName = `ios-options`;
      } else if (routeName === 'More') {
        iconName = `ios-options`;
      }

      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',    
    showIcon:true
  }
}
)

export default createAppContainer(TabNavigator);