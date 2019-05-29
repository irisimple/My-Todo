import MapView, { Marker } from 'react-native-maps';
import React, {Component} from 'react';
import { StyleSheet,  View, Image, Text, TextInput, Button, ScrollView } from 'react-native';
import Header from './../component/header';
import AddressList from './../component/addressList';
import { connect } from 'react-redux';

class App extends Component {  
    render() {    
        return (
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <Header header="Address" 
                        left 
                        right_button
                        navigation={this.props.navigation}/>
                </View>
                
                {
                    this.props.markers.map((marker,index)=>{
                        return(
                            <AddressList key={index}  address={marker.value}/>
                        )
                    })
                }
                
                <View style={styles.container}>
                    <View style={styles.MapContainer}>
                        <MapView
                            style={styles.map}
                            region={{latitude: 42.882004,
                                longitude: 74.582748,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421        
                            }}        
                            showsUserLocation={true}>
                        </MapView>
                    </View>
                </View>
            </View>
            );  
    }}


    const styles = StyleSheet.create({
        container: {
            flex: 8
        },
        MapContainer: {
            flex:1,
            justifyContent: 'flex-end'
        },
        map: {
            height:300,

        },
    });


    const mapStateToProps = state => {
        console.log("Address: ", state.markers.markers)
        return {
          markers: state.markers.markers
        }
      }
      
    export default connect(mapStateToProps, null)(App)