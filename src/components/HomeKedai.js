import React, { Component } from 'react';
import { Container,
   Header,
   Grid,
   Col,
   Row, Text, Item, Input, Content, Form
  } from 'native-base';
import {StatusBar, Image, StyleSheet, Dimensions, ScrollView, ImageBackground, TextInput, View, TouchableOpacity} from 'react-native';
import axios from 'axios';

class HomeKedai extends Component{
    constructor(props){
        super(props);
        this.state={
            nama: 0,
            data: []
        }
        // var email = adilahnurhasanah;
        // var password = 8989;
    }
    render(){
        return(
            <View style={styles.container}>
              <StatusBar backgroundColor='#7f0627' barStyle="light-content" />
             
                <Text style={styles.texttitle}>Masukan Nomor Meja</Text>
                <TextInput placeholder="Nomor Meja" style={styles.input} onChangeText={(nama) => this.setState({nama: nama})} value={this.state.nama}/>
                
                <TouchableOpacity style={styles.buttoncontainer} onPress={()=> {
               if(this.state.nama ===''){
                   alert('Enter Your Nama');
               }else{
               
                axios.post(`http://192.168.1.8:3000/api/v1/transaction`,{
                    'tableNumber': this.state.nama
                } )
                .then(res =>{
                  const data = res.data;
                  this.setState({data});
                  if(this.state.data.Transactions.tableNumber!=null){
                    this.props.navigation.navigate('ListMenu', {tableNumber: this.state.data.Transactions.tableNumber});
                  }
                 
                  console.log(data);
                })
               }
            }
               }>
           <Text style={styles.buttontext} >Submit</Text>
           </TouchableOpacity>
          
          
              </View>
        )
    }
}
export default HomeKedai;
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
        fontSize : 20,
        marginBottom : 20
    }
}