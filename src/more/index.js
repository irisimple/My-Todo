/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, TouchableHighlight, Text, Image} from 'react-native';
import Header from './../component/header';
import ListItem from './../component/moreList';
import { connect } from 'react-redux';

class App extends Component {
    gotoScreen = (title) =>{
        this.props.navigation.navigate(title);
    }
  render() {
    return (
        <View style={{flex:1}}>
        <View style={{flex:1}}>
          <Header header="My To Do"/>
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
            <Text style={styles.text}> {this.props.name}</Text>
        </View>
        <View style={styles.container}>
            <ListItem title="Policies" icon="ios-options"/>
            <ListItem title="Language" icon="ios-options"/>
            <ListItem title="Settings" icon="ios-options" gotoScreen={this.gotoScreen} title="Settings"/>
            <ListItem title="Address" icon="ios-options" gotoScreen={this.gotoScreen} title="Addresses"/>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: '#FFFFFF',
      },
      listItem:{
        backgroundColor: '#DDDDDD',
        padding: 10
      },
      imageContainer:{
        flexDirection:'row',
        alignItems:'center'
      },
      image:{
        height:100,
        width:100,
        borderRadius:50,
        margin:16
      },
      text:{
          textAlign:"center",
          fontSize:24
      }
});

const mapStateToProps = state => {
  return {
    name: state.name.name
  }
}

export default connect(mapStateToProps, null)(App)
