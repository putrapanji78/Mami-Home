import React, {Component} from 'react';
import {Text, TextInput, Button, View, TouchableOpacity, StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Header } from 'native-base';
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
class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            email: ``,
            password: ``,
            data: []
        }
        // var email = adilahnurhasanah;
        // var password = 8989;
    }
    
    render() {
        const {navigation} = this.props;
        const loginid = navigation.getParam('loginstat', 0)
      return (
            
          <View style={styles.container}>
              <StatusBar backgroundColor='#7f0627' barStyle="light-content" />
              <Text style={styles.texttitle}>Mamang Kost</Text>
              <Text style={styles.textregister}>account information</Text>
                <TextInput placeholder="Email" style={styles.input} onChangeText={(email) => this.setState({email: email})} value={this.state.email}/>
                <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} onChangeText={(password) => this.setState({password: password})} value={this.state.password}/>
                <TouchableOpacity style={styles.buttoncontainer} onPress={()=> {
               if(this.state.email ===''){
                   alert('Enter Your email');
               }else if(this.state.password === ''){
                alert('Enter Your password');
               }else{
               
                axios.post(`https://mamangkos.herokuapp.com/api/v1/login`,{
                    'email': this.state.email, 
                    'password': this.state.password
                } )
                .then(res =>{
                  const data = res.data;
                  this.setState({data});
                  if(this.state.data.user.email!=null){
                    // this.props.navigation.navigate('BookingDetail',{Email: this.state.data.email})
                    this.props.navigation.navigate('MamiHome',{
                        loginstat : this.state.data.user.id, 
                        name: this.state.data.user.name, 
                        id: this.state.data.user.id,
                        token: this.state.data.token
                    })
                    alert('Login Success');
                  }else{
                      alert('Login failed');
                  }
                })
               }
            }
               }>
           <Text style={styles.buttontext} >LOGIN</Text>
           </TouchableOpacity>
           <Text style={styles.textregister}>Don't have an account? <Text style={styles.textregister} onPress={() => this.props.navigation.navigate('Register')}>REGISTER</Text></Text>
          
              </View>
      );
    }
  }
  export default LoginScreen;