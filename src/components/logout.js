import React, {Component} from 'react';
import {Text, TextInput, Button, View, TouchableOpacity, StatusBar} from 'react-native';
import axios from 'axios';

const styles = {
    container : {
        padding : 20,
        flex : 1,
        
        justifyContent : 'center',
        alignItems : 'stretch',
        backgroundColor : '#7f0627'
    },
    input : {
        paddingLeft : 20,
        borderRadius : 50,
        height : 50,
        fontSize : 25,
        backgroundColor : 'white',
        borderColor : '#ff5500',
        borderWidth : 1,
        marginBottom : 20,
        color : '#34495e'
    },
    buttoncontainer : {
        height : 50,
        borderRadius : 50,
        backgroundColor : '#66335e',
        paddingVertical : 10,
        justifyContent : 'center'
    },
    buttontext : {
        textAlign : 'center',
        color : '#ecf0f1',
        fontSize : 20
    },
    textregister:{
        textAlign : 'center',
        color : '#ffffff',
        fontSize : 20,
        marginTop : 10,
        marginBottom : 20
    },
    texttitle:{
        textAlign : 'center',
        color : '#ffffff',
        fontSize : 50,
        marginBottom : 20
    }
}

export default class logout extends Component {
render() {
    const {navigation} = this.props;
        const loginId = navigation.getParam('loginstat', 0)
    return (
        
        <View style={styles.container}>
            <StatusBar backgroundColor='#7f0627' barStyle="light-content" />
            <Text style={styles.texttitle}>Selamat Datang</Text>
            <Text style={styles.texttitle}>{this.props.navigation.state.params.name}</Text>
         
         <TouchableOpacity style={styles.buttoncontainer} onPress={()=> (this.props.navigation.navigate('MamiHome',{loginstat: 0}), alert('Logout Success'))}>
         <Text style={styles.buttontext} >LOG OUT</Text>
        </TouchableOpacity>
        </View>

        );
    }
}
    