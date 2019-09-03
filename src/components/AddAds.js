import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Container, 
    Header, 
    Item, 
    Input,  
    Button, 
    Text, 
    Content, 
    Left,
    Body,
    Form,
    Title, 
    Right,
    Row,
    Col} from 'native-base';
import {StatusBar, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker'

export default class AddAds extends React.Component {
  constructor(props){
    super(props);
    this.state={
        RentName: '',
        RentAddress: '',
        Area: '',
        RentOwner: '',
        OwnerPhoneNumber: '',
        roomsleft: '',
        price: '',
        longtitude: '',
        latitude: '',
        Image1 : '',
        image2 : '',
        image3 : '',
        photo: null,

    }
    
}

handleChoosePhoto1 = () => {
  const options1 = {
    noData: true,
  }
  ImagePicker.launchImageLibrary(options1, response => {

      
    if (response.uri) {
      this.setState({ photo: response })
      
    

    }
  })
}


  render() {
    const {navigation} = this.props;
    const loginId = navigation.getParam('iddata', 0)
    const token = navigation.getParam('token',0);
    
    const { photo } = this.state
    return (
      <Container>
        <Header style={{backgroundColor: '#7f0627'}}>
        <StatusBar backgroundColor='#7f0627' barStyle="light-content"/>
        <Button transparent>
        <Icon name="left" size={20} color="white" onPress={() => this.props.navigation.navigate('MamiHome')}></Icon>
            </Button>
                    <Body><Title>Tambah Data Iklan</Title></Body>
                    <Right><Title>Tanya Cs</Title></Right>
        </Header>
        <Content>
          <Text>{loginId}</Text>
          <Text>{token}</Text>
        <Form>
            <Item floatingLabel style={styles.item}>
              <Input style={styles.input} onChangeText={(RentName) => this.setState({RentName: RentName})} value={this.state.RentName} placeholder='Nama Kost'/>
            </Item>
            <Item floatingLabel style={styles.item}>
              <Input style={styles.input} onChangeText={(RentAddress) => this.setState({RentAddress: RentAddress})} value={this.state.RentAddress} placeholder='Alamat Kost'/>
            </Item>
            <Item floatingLabel style={styles.item}>
              <Input style={styles.input} onChangeText={(Area) => this.setState({Area: Area})} value={this.state.Area} placeholder='Daerah'/>
            </Item>
              <Item floatingLabel style={styles.item}>
              <Input style={styles.input} onChangeText={(RentOwner) => this.setState({RentOwner: RentOwner})} value={this.state.RentOwner} placeholder='Pemilik Kost'/>
            </Item>
            <Item floatingLabel style={styles.item}>
              <Input style={styles.input} onChangeText={(OwnerPhoneNumber) => this.setState({OwnerPhoneNumber: OwnerPhoneNumber})} value={this.state.OwnerPhoneNumber} placeholder='No Handphone Pemilik Kost'/>
            </Item>
            <Item floatingLabel style={styles.item}>
              <Input style={styles.input} onChangeText={(roomsleft) => this.setState({roomsleft: roomsleft})} value={this.state.roomsleft} placeholder='sisa ruang/kamar'/>
            </Item>
            <Item floatingLabel style={styles.item}>
              <Input style={styles.input} onChangeText={(price) => this.setState({price: price})} value={this.state.price} placeholder='harga'/>
            </Item>
            <Text style={{margin: 15, fontWeight: 'bold'}}>Cari alamat/area kost anda di peta, kemudian pindahkan pin di peta ke lokasi tepat kost anda </Text>
            <Item floatingLabel style={styles.item}>
              <Input placeholder='Search' style={styles.input}/>
            </Item>
            
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
            <Item style={{marginTop:6, borderBottomColor: 'white'}}>
              <Input placeholder='Longtitude' style={styles.inputL} onChangeText={(longtitude) => this.setState({longtitude: longtitude})} value={this.state.longtitude}></Input>
              <Input placeholder='Latitude' style={styles.inputL} onChangeText={(latitude) => this.setState({latitude: latitude})} value={this.state.latitude}></Input>
            </Item>
            <Row style={{flex: 1}}> 
              <Col>
            
            <TouchableOpacity style={{  justifyContent: 'center', height: 150, backgroundColor: '#7f0627' , margin: 10, padding: 10, width: 120}} onChange={(Image1) => this.setState({Image1: Image1})} value={this.state.Image1} onPress={this.handleChoosePhoto1}>
              {photo && (
                    <Image
                      source={{ uri: photo.uri }}
                      style={{ width: 100, height: 100}}
                    />
                  )}
                  <Text style={{color:'white'}}>gambar 1</Text>
              </TouchableOpacity>
              </Col>
            </Row>
            <Item>
             
          </Item>  
          </Form>
          
          
          <TouchableOpacity style={styles.textOpa} onPress={()=> {
            if(this.state.RentName ===''){
              alert('isi nama kost');
          }else if(this.state.RentAddress === ''){
           alert('isi email alamat');
          }else if(this.state.Area === ''){
           alert('isi nama wilayah');
          }else if(this.state.RentOwner === ''){
           alert('isi nama pemilik kos');
          }else if(this.state.OwnerPhoneNumber=== ''){
           alert('isi nomor telepon kamu');
          }else if(this.state.roomsleft === ''){
           alert('isi jumlah kamar sisa');
          }else if(this.state.price === ''){
             alert('isi harga');
           }else if(this.state.longitude === ''){
             alert('isi longitude');
           }else if(this.state.latitude === ''){
             alert('isi latitude');  
       }else{ 
        var headers = {
          Authorization: `Bearer ${token}`,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        };
      
           axios.post(`https://mamangkos.herokuapp.com/api/v1/addrent`, {
            headers,
            'User_ID': loginId,
            'RentName': this.state.RentName, 
            'RentAddress': this.state.RentAddress,
            'Area': this.state.Area,
            'latitude': this.state.latitude,
            'longtitude': this.state.longitude,
            'RentOwner': this.state.RentOwner,
            'OwnerPhoneNumber': this.state.OwnerPhoneNumber,
            'roomsLeft': this.state.roomsleft,
            'price': this.state.price,
            
            'Image1': '',
            'Image2': '',
            'Image3': ''
            
           })
           alert('Data saved successfully')
          }
          } } >
           <Text style={styles.textOpa} >ADD</Text>
           </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400
  },
  textOpa: {
    textAlign : 'center', 
    color: 'white', 
    fontWeight: 'bold',
    backgroundColor: '#7f0627'
  },
  styleOpa: {
    backgroundColor: '#7f0627', 
    justifyContent : 'center', 
    height: 40, 
    marginTop: 20
  },
  inputL: {
    borderBottomColor: '#7f0627', 
    borderBottomWidth: 2 
  },
  item: {
    marginTop:6, 
    borderBottomWidth: 0
  },
  input: {
    borderBottomWidth: 2, 
    borderBottomColor: '#7f0627'
  }
 
 });

 
