/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet,  View, Image, Text, TextInput, Button} from 'react-native';
import { connect } from 'react-redux';
import Header from './../component/header';
import {updateName} from './../actions/updateName'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:''
        }
    }

    updateName = ()=> {
        console.log("Update Name:", this.state.name);
        this.props.update(this.state.name);
        this.props.navigation.goBack();
    }

    handleNameChange = (name) => {
        this.setState({
            name:name
        });
    }

  render() {
    return (
        <View style={{flex:1,backgroundColor:'gray'}}>
            <View style={{flex:1}}>
                <Header header="Settings" left navigation={this.props.navigation}/>
            </View>
            <View style={styles.container}>
                <View style={{backgroundColor:'white',paddingHorizontal:8}}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    </View>
                    <Text>Name</Text>
                    <TextInput 
                        value={this.state.name} 
                        onChangeText = {this.handleNameChange}
                        underlineColorAndroid="gray"/>
                    <Text>Email</Text>
                    <TextInput value={this.state.email} underlineColorAndroid="gray"/>
                </View>
                <View style={{marginTop:50,marginHorizontal:8}}>
                    <Button title="Update" onPress={this.updateName}/>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: 'lightgray',
      },
      imageContainer:{
        alignItems:'center',
        justifyContent:'center'
      },
      image:{
        height:80,
        width:80,
        borderRadius:40,
        margin:16
      },
});

const mapStateToProps = state => {
    return {
      name: state.name.name
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      update: (name) => {
          console.log("Update props:", name);
        dispatch(updateName(name))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)