import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React, {Component} from 'react';
import { StyleSheet,  View, Image, Text, TextInput, Button} from 'react-native';
import Header from './../component/header';
import {addAddress} from './../actions/addMarker';
import { connect } from 'react-redux';

class App extends Component {  
    constructor(props){
        super(props);
        this.state = {
            latitude:0,
            longitude:0,
            address :'',
            region:{
                latitude:37.78825,
                longitude:-122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        }
    }

    handlelatitudeChange = (latitude) => {
        this.setState({
            latitude:latitude,
            region:{
                latitude:latitude,
            }
        });
    }

    handlelongitudeChange = (longitude) => {
        this.setState({
            longitude:longitude,
            region:{
                longitude:longitude,
            }
        });
    }

    handleaddressChange = (address) => {
        this.setState({
            address:address
        });
    }

    addAddress = ()=> {
        this.props.update({
            latitude:this.state.latitude,
            longitude:this.state.longitude,
            address:this.state.address
        });
        this.setState({
            latitude:0,
            longitude:0,
        })
        this.props.navigation.goBack();
    }

    render() {    
        return (
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <Header header="New Address" left navigation={this.props.navigation}/>
                </View>
                <View style={{padding:16}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{marginTop:16}}>Latitude : </Text>
                        <TextInput
                            style={{flex:1}}
                            value={`${this.state.latitude}`} 
                            keyboardType={'numeric'}
                            onChangeText = {this.handlelatitudeChange}
                            underlineColorAndroid="gray"/>
                    </View>

                    <View style={{flexDirection:'row',texAlign:'center'}}>
                        <Text style={{marginTop:16}}>Longitude : </Text>
                        <TextInput 
                            style={{flex:1}}
                            keyboardType={'numeric'}
                            value={`${this.state.longitude}`} 
                            onChangeText = {this.handlelongitudeChange}
                            underlineColorAndroid="gray"/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{marginTop:16}}>Address : </Text>
                        <TextInput
                            style={{flex:1}}
                            value={this.state.address} 
                            onChangeText = {this.handleaddressChange}
                            underlineColorAndroid="gray"/>
                    </View>

                    <View style={{marginTop:30}}>
                        <Button title="Add Address" onPress={this.addAddress}/>
                    </View>

                </View>
                
                <View style={styles.container}>
                    {/* <MapView
                        style={{flex: 1}}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        region = {this.state.region}
                        showsUserLocation={true}/> */}
                </View>
            </View>
            );
    }}


    const styles = StyleSheet.create({
        container: {
            flex: 9
          }
    });

      
      const mapDispatchToProps = dispatch => {
        return {
          update: (Coordinates) => {
            dispatch(addAddress(Coordinates))
          }
        }
      }
    
    export default connect(null, mapDispatchToProps)(App)