import React, { Component } from 'react';
import { 
  Container, 
  Header, 
  Item, 
  Input, 
  Button, 
  Text, 
  Tabs, 
  Tab, 
  Content, 
  Card, 
  CardItem, 
  Left, Badge, Grid, Fab, View, Footer, FooterTab, Col} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from 'axios';
export default class ContentList extends Component{
  constructor(props){
    super(props);
    this.state = {
      active: false,
      houses : []
    }
  }
  componentDidMount(){
    axios.get(`https://mamangkos.herokuapp.com/api/v1/rents`)
    .then(res =>{
      const houses = res.data;
      this.setState({houses});
    })
  }
    render(){
      const {navigation} = this.props;
        const loginId = this.state.loginId2
     
        return(
            <Container >
              <Content >
               {this.state.houses.map((item)=> { 
                 return(
                  <Col onPress={() => this.props.content.navigate('PageDetail', {loginstat : loginId, iddata: item.id, iduser: this.props.iddata})}>
                  <Card >
                  <CardItem cardBody >
                    <Image source={{uri: 'https://mamangkos.herokuapp.com/api/v1/'+item.Image1}} style={styles.imageStyle} onPress={() => this.props.navigation.navigate('PageDetail')}/>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Text style={{color: 'blue'}} onPress={() => this.props.navigation.navigate('PageDetail')}>{item.RentName}</Text>
                      <Text style={{color: 'green'}}>Ada {item.roomLeft} Kamar</Text>
                      <Text style={{color: 'green'}}>{item.Area}</Text>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Text style={{color: 'black'}}>Rp {item.price}/Bulan</Text>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Left>
                    <Text style={{color: 'black'}}>{item.RentAddress}</Text>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Left>
                        <Badge style={styles.backGround}>
                    <Text style={styles.colorWhite}>Bisa Booking</Text>
                </Badge>
                      
                    </Left>
                  </CardItem>
                </Card>
                </Col>
                 )
                
      })}
        </Content>
          <View style={styles.buttonView}>
          <Button style={styles.backGround}><Icon name='sort' size={40} color="white" style={styles.backGround}></Icon><Text style={styles.backGround}>Sort</Text></Button>
          <Button style={styles.backGround}><Text>Filter</Text><Icon name='filter-list' size={40} color="white"></Icon></Button>
          </View>
        </Container>
        )
    }
}

const styles = StyleSheet.create({
  colorWhite: {
    color: 'white'
  },
  colorBlack: {
    color: 'black'
  },
  colorGreen: {
    color: 'green'
  },
  colorBlue: {
    color: 'blue'
  },
  imageStyle: {
    height: 200, 
    width: null, 
    flex: 1
  },
  backGround: {
    backgroundColor: '#7f0627'
  },
  buttonView: {
    justifyContent: 'center', 
    alignItems:'center', 
    flexDirection: 'row'
  }
});