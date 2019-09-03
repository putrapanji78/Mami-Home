import React, {Component} from 'react';
import {Text, TextInput,  View, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Register from './src/components/Register';
import HomePage from './src/components/PageList';
import LoginScreen from './src/components/Login';
import PageBeranda from './src/components/AddAds';
import BookingDetail from './src/components/BookingDetail';
import PageDetail from './src/components/PageDetail';
import MamiHome from './src/components/MamiHome';
import ContentList from './src/components/ContentList';
import Splash from './SplashScreen';
import Maps from './src/components/Map';
import Book from './src/components/Book';
import Logout from './src/components/logout';
import HomeKedai from './src/components/HomeKedai';
import ListMenu from './src/components/ListMenu';

const App = createStackNavigator({
    HomeKedai: {
        screen :  HomeKedai,
        navigationOptions: {
            headerTransparent: true
        }
    },
    PageBeranda: {
        screen: PageBeranda,
        navigationOptions: {
            header : null
        }

    },
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header : null
        } 
    },
    PageDetail: {
        screen: PageDetail,
        navigationOptions: {
            header : null
        }
    },
    ContentList: {
        screen: ContentList,
        navigationOptions: {
            header: null
        }
    },
    BookingDetail: {
        screen: BookingDetail,
        navigationOptions: {
            header: null
        }
    },
    LoginScreen : {
        screen : LoginScreen,
        navigationOptions:{
            header: null
        }
    },
    Register : {
        screen : Register,
        navigationOptions:{
            header : null
        }
    },
    Splash : {
        screen : Splash,
        navigationOptions:{
            header : null
        }
    },
    Book : {
        screen : Book,
        navigationOptions:{
            header : null
        }
    },
    Logout : {
        screen : Logout,
        navigationOptions:{
            header : null
        }
    },
    ListMenu : {
        screen: ListMenu,
        navigationOptions:{
            header: null
        }
    }


    
});
export default createAppContainer(App);


