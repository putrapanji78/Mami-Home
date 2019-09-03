import React, {Component} from 'react';
import MapView, { PROVIDER_GOOGLE , Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {Text, TextInput, View, TouchableOpacity, StatusBar, Image, StyleSheet, Dimensions, Share, ScrollView} from 'react-native';
import { Container, Content, Card, CardItem, Header, Grid, Col, Row, Right, H1, Button, Footer, FooterTab, Body, Title} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconLine from 'react-native-vector-icons/SimpleLineIcons';
import SwiperFlatList from 'react-native-swiper-flatlist';

export default class Map extends Component{
    render(){
        return(
            <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
        latitude: -6.301608, 
        longitude: 106.735095,
        latitudeDelta: 0.00015,
        longitudeDelta: 0.000121,
      }}
     >
       <Marker
      coordinate={{
          latitude : -6.301608,
          longitude : 106.735095

        }}
      title={"Rumah Panji"}
      description={"Disini"}
    />
     </MapView>
        );
    }
}
const styles = StyleSheet.create({
    map: {
      // ...StyleSheet.absoluteFillObject,
      height: 500,
      width: 500
    }
   });