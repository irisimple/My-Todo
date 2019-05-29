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
        <TouchableHighlight style={styles.listItem}
            onPress={() => { 
                this.props.gotoScreen ?
                this.props.gotoScreen(this.props.title)
                : null
            }}
            underlayColor="gray"
        >
            <View style={styles.container}>
                <Ionicons style={styles.Icon} name={this.props.icon} size={30}/>
                <View style={{justifyContent:'center'}}>
                    <Text> {this.props.title} </Text>
                </View>
            </View>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
      container:{
        flexDirection: 'row',
        height: 60,
        alignItems:'center'
      },
      listItem:{
        backgroundColor: '#FFFFFF'
      },
      Icon:{
        paddingHorizontal:16
      },
      title:{
          textAlign:'center'
      }
});
