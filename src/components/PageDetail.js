import React, {Component} from 'react';
import MapView, { PROVIDER_GOOGLE , Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {Text, TextInput, View, TouchableOpacity, StatusBar, Image, StyleSheet, Dimensions, Share, ScrollView} from 'react-native';
import { Container, Content, Card, CardItem, Header, Grid, Col, Row, Right, H1, Button, Footer, FooterTab, Body, Title, Item} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconLine from 'react-native-vector-icons/SimpleLineIcons';
import SwiperFlatList from 'react-native-swiper-flatlist';
import axios from 'axios';

class PageDetail extends Component{
    constructor(props){
        super(props);
        this._shareMassage= this._shareMassage.bind(this);
        this._showResult = this._showResult.bind(this);
        this.state = {
            result: '',
            menu: 'photo',
            iconColorPhoto: 'white',
            iconColorMap : 'white',
            houses: []
    };
    
    }
    _showResult(result){
        this.setState({result});
    }
    _shareMassage(){
        Share.share({message: 'Hello World'}).then(this._showResult);
    }
    componentDidMount(){
        axios.get(`https://mamangkos.herokuapp.com/api/v1/rent/${this.props.navigation.state.params.iddata}`)
        .then(res =>{
          const houses = res.data;
          this.setState({houses});
        })
      }
    
    render(){
        const {navigation} = this.props;
        const loginId = this.state.loginstat
        const idDataUser = navigation.getParam('iduser', 0);
        
        return(
                <Container>
                <Content style={styles.content}>
                    <Header style={styles.backGround}>
            <StatusBar backgroundColor='#7f0627' barStyle="light-content"/>
            <Button transparent onPress={() => this.props.navigation.navigate('HomePage')}>
        
                <Icon name="left" size={20} color="white"></Icon>
                    </Button>
                    <Body><Title style={styles.textCenter}>Page Detail </Title></Body>
                    <Right>
                        <Icon name='sharealt' size={20} color='white' onPress={this._shareMassage}></Icon>
                    </Right>  
                </Header>
                    <StatusBar backgroundColor='#7f0627' barStyle="light-content" />
                    
                    {(this.state.menu)=='photo'? 
                    <Card style={styles.margin5}>
                        <CardItem cardBody style={styles.margin0}>
                        <View style={styles.container}>
                            <SwiperFlatList
                                index={2}
                                showPagination
                            >
                                <View style={[styles.child]}>
                        <Image source={{uri: 'https://mamangkos.herokuapp.com/api/v1/'+this.state.houses.Image1}} style={styles.images}/>
                        </View>
                        <View style={[styles.child]}>
                        <Image source={{uri: 'https://mamangkos.herokuapp.com/api/v1/'+this.state.houses.Image1}} style={styles.images}/>
                        </View>
                        <View style={[styles.child]}>
                        <Image source={{uri: 'https://mamangkos.herokuapp.com/api/v1/'+this.state.houses.Image1}} style={styles.images}/>
                        </View>
                            </SwiperFlatList>
                            </View>
                        </CardItem>
                        <Grid style={styles.gridCenter}>
                           <Row> 
                        <Col style={styles.backGround} onPress={()=> {this.setState({menu: 'photo'})}}>
                            <Text style={styles.colText}>
                                <Icon name="camera" size={20} color={this.state.iconColorPhoto}> Photo</Icon>
                                </Text>
                                </Col>
                                <Col style={styles.backGround} onPress={()=> {this.setState({menu: 'map'})}}>
                            <Text style={styles.colText} >
                                <Icon name="enviroment" size={20}  color={this.state.iconColorMap}> Peta</Icon>
                                </Text>
                                </Col>
                                </Row>
                        </Grid>
                    </Card> 
                    : 
                    <Card style={styles.margin5}>
                    <CardItem cardBody style={styles.content}>
                    <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude:  parseFloat(this.state.houses.latitude), 
         longitude: this.state.houses.longtitude,
         latitudeDelta: 0.00015,
         longitudeDelta: 0.000121,
       }}
     >
          <Marker draggable

      coordinate={{
          latitude : parseFloat(this.state.houses.latitude),
          longitude : this.state.houses.longtitude

        }}
      title={this.state.houses.RentName}
      description={this.state.houses.latitude}
    />
     </MapView>
                    </CardItem>
                    <Grid style={styles.gridCenter}>
                       <Row> 
                    <Col style={styles.backGround} onPress={()=> {this.setState({menu: 'photo'})}}>
                        <Text style={styles.col}>
                            <Icon name="camera" size={20} color="white"> Photo</Icon>
                            </Text>
                            </Col>
                            <Col style={styles.backGround} onPress={()=> {this.setState({menu: 'map'})}}>
                        <Text style={styles.col} >
                            <Icon name="enviroment" size={20} color="white"> Peta</Icon>
                            </Text>
                            </Col>
                            </Row>
                    </Grid>
                </Card>
                    }
                    <Text style={styles.margin10}>kost putra dan putri <Text></Text> </Text>
                    <Row style={styles.margin10}>
                        <Col>
                            <Text style={styles.font20}>{this.state.houses.RentName}</Text>
                            <Text style={styles.font20}>{this.state.houses.Area}</Text>
                            <Text>update 15 Agutus 2019. 18.10</Text>
                        </Col>
                        <Col>
                        <Right>
                            <IconMaterial name="stars" size={50} color="red"></IconMaterial>
                            <Text style={styles.premium}>Premium</Text>
                        </Right>    
                        </Col>
                    </Row>
                    <Row style={styles.margin20}>
                        <Col>
                            <Text>tidak termasuk listrik</Text>
                        </Col>
                        <Col>
                        <View style={{flexDirection:"row"}}>
                            <IconMaterial name="money-off" size={20}></IconMaterial><Text>tidak ada min bayar</Text>
                        </View>    
                        </Col>
                    </Row>
                    <Row style={styles.margin10}>
                        <Col>
                        <Text>Luas Kamar</Text>
                        <IconLine name="size-fullscreen" size={20} color="#7f0627"> 3x4m</IconLine>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Text style={styles.margin10}>Fasilitas kost dan kamar</Text>
                        </Col>
                        <Col>
                        <Right style={styles.marginLeft80}>
                            <Text style={styles.backGround}>Lihat Semua</Text>
                        </Right>
                        </Col>
                    </Row>
                    <Row style={styles.margin20}>
                        <Col>
                        <Text>Kebersihan</Text>
                        <Text>rating</Text>
                        </Col>
                        <Col>
                        <Text>Kenyamanan</Text>
                        <Text>rating</Text>
                        </Col>
                    </Row>
                    <Row style={styles.margin20}>
                        <Col>
                        <Text>Keamanan</Text>
                        <Text>rating</Text>
                        </Col>
                        <Col>
                        <Text>Harga</Text>
                        <Text>rating</Text>
                        </Col>
                    </Row>
                    <Row style={styles.margin20}>
                        <Col>
                        <Text>Fasilitas Kamar</Text>
                        <Text>rating</Text>
                        </Col>
                        <Col>
                        <Text>Fasilitas Umum {idDataUser}</Text>
                        <Text>rating</Text>
                        </Col>   
                    </Row>
                    <Text style={styles.verifikasi}>Verifikasi</Text>
                    <Text style={styles.margin20}>icon. kost belum dikunjungi</Text>
                    <Text style={styles.margin20}>icon. Telepon sudah terifikasi</Text>
                    <Row style={styles.row}>
                        <Col style={styles.flex53}><Text style={styles.white}>Ada data yang kurang tepat atau kendala lain dengan kost?</Text></Col>
                        <Col><Text style={styles.flex47}>Laporkan</Text></Col>
                    </Row>
                    {/* <Text style={styles.kostext}>Kos Menarik Lainnya</Text> */}
                    {/* <ScrollView horizontal style={styles.margin20}>
                      
                      
                        <Col onPress={() => this.props.navigation.navigate('HomePage')}>
                      <Image source={require('../../images/image-3.jpg')} margin={10} />
                      </Col>
                      <Col onPress={() => this.props.navigation.navigate('HomePage')}>
                      <Image source={require('../../images/image-3.jpg')} margin={10} />
                      </Col>
                      <Col onPress={() => this.props.navigation.navigate('HomePage')}>
                      <Image source={require('../../images/image-3.jpg')} margin={10} />
                      </Col>
                      <Col onPress={() => this.props.navigation.navigate('HomePage')}>
                      <Image source={require('../../images/image-3.jpg')} margin={10} />
                      </Col>

                    </ScrollView> */}
                </Content> 
                <View style={styles.flexrow}>
                    <Text style={styles.priceText}>Rp{this.state.houses.price}/bulan</Text>
                    <Button bordered danger style={styles.buttonFooter}><Text  style={styles.textButton}>Hubungi Host</Text></Button>
                    <Button bordered danger style={styles.buttonFooterColor} 
                    onPress={() => {idDataUser!=0? this.props.navigation.navigate('BookingDetail', {loginstart: loginId, iddata: this.props.navigation.state.params.iddata, iduser: idDataUser}): alert('You must login first')}}><Text  style={styles.textButtonColor}>Booking</Text></Button>
          </View>
                </Container>
        );
    }
}
export default PageDetail

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    gridCenter: {
        margin: 0, 
        height: 40, 
        justifyContent: 'center'
    },
    verifikasi: {
        fontSize:30, 
        fontWeight:"bold", 
        margin: 10
    },
    row: {
        backgroundColor: '#7f0627', margin: 5, padding: 15
    },
    container: {
      flex: 1,
      backgroundColor: 'white'
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
    map: {
        // ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400
      },
    buttonFooter: {
        marginLeft: 10,
        padding: 5
    },
    buttonFooterColor: {
        marginLeft: 10, 
        padding: 5, 
        backgroundColor:'#7f0627'
    },
    textButton: {
        color: "#7f0627", 
        fontSize: 18, 
        padding: 8
    },
    textButtonColor: {
        color: "white", 
        fontSize: 18, 
        padding: 8
    },
    priceText: {
        fontSize: 18, 
        padding: 15
    },
    images: {
        width: 450, 
        height: 400
    },
    colText: {
        color: 'white', textAlign: 'center', marginTop:8

    },
    backGround: {
        backgroundColor: '#7f0627'
    },
    content: {
        margin: 0
    },
    col: {
        color: 'white', textAlign: 'center', marginTop:8
    },
    font20: {
        fontSize: 20
    },
    margin10: {
        margin: 10
    },
    margin20: {
        margin: 20
    },
    kostext : {
        fontSize:30, 
        fontWeight:"bold", 
        margin: 10
    },
    flexrow: {
        flexDirection: 'row'
    },
    flex47: {
        color: "white", 
        flex: 4.7
    },
    flex53: {
        flex: 5.3
    },
    white: {
        color: 'white'
    },
    marginleft80: {
        marginLeft: 80
    },
    textCenter: {
        textAlign :'center'
    },
    margin0: {
        margin: 0
    },
    margin5: {
        margin:-5
    }

  });