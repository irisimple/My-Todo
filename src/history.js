/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet,  View} from 'react-native';
import Header from './component/header';

export default class App extends Component {
  render() {
    return (
        <View style={{flex:1}}>
        <View style={{flex:1}}>
          <Header header="My To Do"/>
        </View>
        <View style={styles.container}>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: '#FFFFFF',
      }
});
