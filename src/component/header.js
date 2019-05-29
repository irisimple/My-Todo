/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      {
        this.props.left &&
        <Ionicons name='ios-options' size={25} onPress={() => this.props.navigation.goBack()}/>
      }
        <View style={{flex:1,justifyContent:'center'}}>
          <Text style={styles.headerText}>{this.props.header}</Text>
        </View>
      {
        this.props.right_button &&
        <Button title="ADD" onPress={() => this.props.navigation.navigate("AddAddress")}/>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    elevation:10,
    paddingHorizontal:16
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
