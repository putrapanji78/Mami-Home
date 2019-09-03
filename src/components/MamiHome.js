import React, { Component } from 'react';
import { Container,
   Header,
    Item,
    Input,
    Icon,
    Button,
    Text, 
    Tabs, 
    Tab, 
    Content, 
    Card, 
    CardItem, 
    Left, 
    Badge, 
    Row, 
    Col, 
    Right,
    DeckSwiper,
    View,
    Thumbnail,
    Body,
    Footer,
    FooterTab, Title
  } from 'native-base';
import {StatusBar, Image, StyleSheet, Dimensions, ScrollView, ImageBackground, TextInput} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import {connect} from 'react-redux';
import * as getlistrent from '../redux/actions/getlistrent'



class MamiHome extends Component{
  constructor(props){
    super(props);
    this.state={
      houses : [],
      ads : [
        {
          id : 1,
          Image : require('../../images/hotel.jpg')
        },
        {
          id : 2,
          Image : require('../../images/image-2.jpg')
        },
        {
          id : 3,
          Image : require('../../images/image-3.jpg')
        },
        {
          id : 4,
          Image : require('../../images/image-4.jpg')
        },
        {
          id : 5,
          Image : require('../../images/image-5.jpg')
        }
      ]
    }
  }
  componentDidMount(){
    // axios.get(`http://192.168.43.213:5000/api/v1/rentlist/`)
    // .then(res =>{
    //   const houses = res.data;
    //   this.setState({houses});
    // })
    this.props.getData()
  }
    render(){
        const {navigation} = this.props;
        const loginId = navigation.getParam('loginstat', 0)
        const iddata = navigation.getParam('id', 0);
        const token = navigation.getParam('token', 0);
        console.log(this.props.getlistrent.data)
        
        return(
            <Container>
            <Header style={styles.backgroundColor}>
            <Title style={{alignItems: 'center'}}>MamangKost</Title>
            <StatusBar backgroundColor='#7f0627' barStyle="light-content"/>
            </Header>
            
              
                  <Content style={styles.Content}>
                  <Text>Hai, {iddata}</Text>
                  <Text>Mau cari kost dimana?</Text>
                  <Button style={styles.buttonSearch} onPress={()=> this.props.navigation.navigate('HomePage')}><Icon name="ios-search"/><Text style={styles.searchText}>masukan alamat atau nama kost</Text></Button>

                    
                    
                    <Text style={styles.textSize}>Promo</Text>
                    <View style={styles.container}>
                      <SwiperFlatList
                        autoplay
                        autoplayDelay={4}
                        autoplayLoop
                        index={2}
                        showPagination
                      >
                        {/* {this.state.houses.map((item)=>{
                          return(
                            <View >
                        <Image source={{uri: item.Image1}} style={styles.promoImage}/>
                        </View>
                          );
                        })} */}
                         {this.state.ads.map((item)=>{
                          return(
                            <View >
                        <Image source={item.Image} style={styles.promoImage}/>
                        </View>
                          );
                        })}
                        
                      </SwiperFlatList>
                    </View>
                    <Row style={styles.rowAdd}>
                        <Col><Text style={styles.textAds}>Tertarik mengiklankan Kostmu?</Text></Col>
                        <Col>
                            <Right>
                            <Button rounded style={styles.buttonAds} ><Text style={styles.buttonText}  onPress={()=>{
                    loginId!=0? (this.props.navigation.navigate('PageBeranda', {iddata: iddata, token: token}))  : (this.props.navigation.navigate('LoginScreen'), alert('You must login first'))
                  }
                }>{loginId!=0? 'PASANG IKLAN' : 'LOGIN'}</Text></Button>
                            </Right>
                        </Col>
                    </Row>
                    <Text style={styles.styleKota}></Text>
                    <ScrollView horizontal>
                        <Col onPress={() => this.props.navigation.navigate('HomePage',{loginstat : loginId, iddata: iddata})} >
                          <ImageBackground source={require('../../images/jakarta.jpg')} style={styles.colImage}>
                            <Text style={styles.colText}>Jakarta</Text>
                          </ImageBackground>
                      </Col>
                      <Col onPress={() => this.props.navigation.navigate('HomePage')} >
                          <ImageBackground source={require('../../images/surabaya.jpg')} style={styles.colImage}>
                            <Text style={styles.colText}>Surabaya</Text>
                          </ImageBackground>
                      </Col>
                      <Col onPress={() => this.props.navigation.navigate('HomePage')} >
                          <ImageBackground source={require('../../images/yogyakarta.jpg')} style={styles.colImage}>
                            <Text style={styles.colText}>Yogyakarta</Text>
                          </ImageBackground>
                      </Col>
                      <Col onPress={() => this.props.navigation.navigate('HomePage')} >
                          <ImageBackground source={require('../../images/aceh.jpg')} style={styles.colImage}>
                            <Text style={styles.colText}>Aceh</Text>
                          </ImageBackground>
                      </Col>
                      

                    </ScrollView>
                </Content>
             
             
            <Footer>
              <FooterTab style={styles.backgroundColor}>
                
                
                <Button vertical onPress={() => this.props.navigation.navigate('PageDetail')}>
                <IconMaterial name="search" size={30} color='white'></IconMaterial>
                  <Text style={styles.colorWhite}>Explore</Text>
                </Button>
               
                <Button vertical 
                onPress={
                  ()=>{
                    loginId!=0? this.props.navigation.navigate('Logout',{loginstat : 0, name: this.props.navigation.state.params.name})  : this.props.navigation.navigate('LoginScreen')
                  }
                }
                >
                <IconMaterial name="account-circle" size={30} color='white'></IconMaterial>
                  <Text style={styles.colorWhite}>{loginId!=0? this.props.navigation.state.params.name : 'Login'}</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        );
    }
}
export const { width, height } = Dimensions.get('window');

const mapStateToProps = state => {
  return {
    getlistrent: state.rent
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getlistrent.getRent()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MamiHome);
// export default MamiHome;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20
  },
  child: {
    height: height * 0.5,
    width,
    justifyContent: 'center'
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center'
  },
  buttonSearch : {
    backgroundColor : '#7f0627',
    marginBottom: 20
  },
  colText: {
    color: 'white', marginLeft: 50, marginTop: 170, fontWeight:'bold'
  },
   colImage: {
    width: 150, height: 200, margin: 10
   },
   styleKota: {
    fontSize:20, marginTop: 20, marginBottom: 20
   },
   rowAdd: {
    margin:5, backgroundColor: '#7f0627'
   },
   colorWhite: {
     color: 'white',
     fontSize: 15
   },
   buttonAds: {
    margin: 10,marginLeft: 10 ,backgroundColor: "white"
   },
   buttonText: {
    padding:20, color: "#7f0627"
   },
   textAds: {
    color: 'white', margin: 10
   },
   backgroundColor: {
    backgroundColor: '#7f0627'
   },
   promoImage: {
    width: 400, height: 200
   },
   searchText: {
     marginRight: 40
    },
    Content: {margin:10},
    textSize: {fontSize:20}
});
