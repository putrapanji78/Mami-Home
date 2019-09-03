import React, {Component} from 'react';
import {Text, TextInput, Button, View, TouchableOpacity, StatusBar} from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import { Container, Content } from 'native-base';
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
export default class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            name: '',
            gender: '',
            phoneNumber: '',
            job: ''

        }
        
    }
  
  render() {
    
    return (
        
        <Container>
            <Content>
        <View style={styles.container}>
            <StatusBar backgroundColor='#7f0627' barStyle="light-content" />
            <Text style={styles.texttitle}>Mamang Kost</Text>
         <TextInput placeholder="Email" style={styles.input} onChangeText={(email) => this.setState({email: email})} value={this.state.email}/>
         <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} onChangeText={(password) => this.setState({password: password})} value={this.state.password}/>
         <TextInput placeholder="nama lengkap" style={styles.input} onChangeText={(name) => this.setState({name: name})} value={this.state.name}></TextInput>
         <TextInput placeholder="jenis kelamin" style={styles.input} onChangeText={(gender) => this.setState({gender: gender})} value={this.state.gender}></TextInput>
         <TextInput placeholder="No. HP" style={styles.input} onChangeText={(phoneNumber) => this.setState({phoneNumber: phoneNumber})} value={this.state.phoneNumber}></TextInput>
         <TextInput placeholder="pekerjaan" style={styles.input} onChangeText={(job) => this.setState({job: job})} value={this.state.job}></TextInput>
         <TouchableOpacity style={styles.buttoncontainer} onPress={()=> {
               if(this.state.email ===''){
                   alert('isi email kamu');
               }else if(this.state.password === ''){
                alert('isi email kamu');
               }else if(this.state.name === ''){
                alert('isi nama kamu');
               }else if(this.state.gender === ''){
                alert('isi jenis kelamin kamu');
               }else if(this.state.phoneNumber === ''){
                alert('isi nomor telepon kamu');
            }else if(this.state.job === ''){
                alert('isi pekerjaan kamu');
            }else{ 
               
                axios.post(`https://mamangkos.herokuapp.com/api/v1/register`, {
                    'email': this.state.email, 
                    'password': this.state.password,
                    'name': this.state.name,
                    'gender': this.state.gender,
                    'phoneNumber': this.state.phoneNumber,
                    'job': this.state.job
                })
                .then(res => {
                    
                    // console.log(res.data);
                  })
                this.props.navigation.navigate('LoginScreen')
                alert('Register Success');
               }
            }
               }>
         <Text style={styles.buttontext} >REGISTER</Text>
         </TouchableOpacity>
         <Text style={styles.textregister}>already have an account?<Text style={styles.textregister} onPress={() => this.props.navigation.navigate('LoginScreen')}> Login</Text></Text>
         
            </View>
            </Content>
            </Container>
    );
  }
}


