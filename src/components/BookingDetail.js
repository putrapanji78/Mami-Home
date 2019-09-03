import React, {Component} from 'react';
import {Text, TextInput, View, TouchableOpacity, StatusBar, Image, StyleSheet} from 'react-native';
import { Container, 
    Content, 
    Card, 
    CardItem, 
    Header, 
    Grid, 
    Col, 
    Row, 
    Title, 
    Left, 
    Body, 
    Right, 
    Button, 
    Item, 
    Input, 
    Thumbnail, 
     ListItem, 
     DatePicker,
    Form,
    Picker, CheckBox, Footer} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import {SliderBox} from 'react-native-image-slider-box';
import axios from 'axios';


class BookingDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            chosenDate: new Date(),
            selected2: '',
            users: [],
            rentlist: []
        };
        this.setDate = this.setDate.bind(this);
        const {navigation} = this.props;
        this.idDataUser = navigation.getParam('iduser', 0);
      }
      onValueChange2(value: string) {
        this.setState({
          selected2: value
        });
      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
      componentDidMount(){
        axios.get(`https://mamangkos.herokuapp.com/api/v1/rent/${this.props.navigation.state.params.iddata}`)
        .then(res =>{
          const rentlist = res.data;
          this.setState({rentlist});
        })

        axios.get(`https://mamangkos.herokuapp.com/api/v1/user/${this.idDataUser}`)
        .then(res =>{
          const users = res.data;
          this.setState({users});
        })
      }
    render(){
        
        return(
           
            <Container>
                <Header style={styles.backgroundColor}>
                <StatusBar backgroundColor='#7f0627' barStyle="light-content"/>
                <Button transparent>
            
                    <Icon name="left" size={20} color="white" onPress={() => this.props.navigation.navigate('PageDetail')}></Icon>
                        </Button>
                                <Body><Title style={styles.textCenter}>Booking Detail</Title></Body>  
                    </Header>
                    <Grid>
                        
                        <Row style={styles.rowTop}>
                            <Col>
                            <Text>Tanggal masuk</Text>
                            <Item style={styles.borderColor}>
                            </Item>
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "#7f0627" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                                disabled={false}
                                />
                            </Col>
                            <Col>
                            <Item style={styles.borderColor}>
                            
                                <Item picker>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Select your SIM"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="1 hari" value="1" />
                                    <Picker.Item label="3 hari" value="3" />
                                    <Picker.Item label="1 minggu" value="7" />
                                    <Picker.Item label="1 bulan" value="30" />
                                    <Picker.Item label="1 tahun" value="1" />
                                </Picker>
                                </Item>
                            
                            </Item>
                            </Col>
                            <Col>
                            <Right>
                            <Text>Tanggal keluar</Text>
                            <Item style={styles.borderColor}>
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                                disabled={false}
                                />
                            </Item>
                            </Right>
                            </Col>
                            
                        </Row>
                        <Row style={{marginTop: -20}}>
                            <Col>
                            <Card>
                        <CardItem>
                        <Image source={{uri: 'https://mamangkos.herokuapp.com/api/v1/'+this.state.rentlist.Image1}} style={styles.imageStyle}/>
                            <View style={{}}>
                        <Text>{this.state.rentlist.RentName}</Text>
                        <Text><Icon name="phone" size={20} color="green"></Icon> <Icon name="iconfontdesktop" size={20} color="green"></Icon> <Icon name="car" size={20} color="green"></Icon></Text>
                        <Text style={styles.fontWeight}>Rp {this.state.rentlist.price}</Text>
                        </View>
                        </CardItem>
                        
                    </Card>
                    </Col>
                        </Row>
                        <Row style={styles.rowStyle}>
                            <Col>
                                <Item>
                                <Left>
                                    <Text style={styles.redColor}>Data Pengguna</Text>
                                    <Text>Nama Lengkap</Text>
                                    <Text>Jenis Kelamin</Text>
                                    <Text>No Handphone</Text>
                                    <Text>Pekerjaan</Text>
                                </Left>
                                </Item>
                            </Col>
                            <Col>
                                <Item>
                                <Right>
                                <Text style={styles.redColor}></Text>
                                    <Text style={styles.fontWeight}>{this.state.users.name}</Text>
                                    <Text style={styles.fontWeight}>{this.state.users.gender}</Text>
                                    <Text style={styles.fontWeight}>{this.state.users.phoneNumber}</Text>
                                    <Text style={styles.fontWeight}>{this.state.users.job}</Text>
                                    </Right>
                                    </Item>
                            </Col>
                        </Row>
                        <Row style={{marginTop: 20}} > 
                            <Col>
                                <Item>
                                <Text style={styles.textWeight}>Keterangan Biaya Lain</Text>
                                </Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <ListItem>
                            <CheckBox checked={this.state.status} onPress={() => this.setState({status : true})} color='#7f0627'/>
                            <Body>
                                <Text style={styles.marginLeft}>
                                Saya menyetujui syarat ketentuan dan memastikan data diatas benar
                                </Text>
                            </Body>
                            </ListItem>
                            </Col>
                        </Row>
                      
                    </Grid>
                    <Footer >
                    <Button style={styles.footerButton} onPress={() => {
                        axios.post(`https://mamangkos.herokuapp.com/booking`, {
                            // 'email': this.state.email, 
                            // 'password': this.state.password,
                            // 'name': this.state.name,
                            // 'gender': this.state.gender,
                            // 'phoneNumber': this.state.phoneNumber,
                            // 'job': this.state.job
                            'rentlist_id': this.state.rentlist.id,
                            'users_id': this.state.users.id,
                            'dateOfEntry': this.state.chosenDate,
                            'stay' : this.state.selected2,
                            'outDate' : this.state.chosenDate
                    }).then(res => {
                             alert('Booking Success')
                            // console.log(res.data);
                          })
                        this.props.navigation.navigate('MamiHome')
                       
                    }}>
                    
                    <Text style={styles.footerText} >BOOKING</Text>
                  
                    </Button>
                    </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    footerText: {
        textAlign : 'center', 
        color: 'white', 
        fontWeight: 'bold'
    },
    footerButton: {
        backgroundColor: '#7f0627', 
        flex: 1, 
        justifyContent : 'center', 
        height:60
    },
    fontWeight : {
        fontWeight: 'bold'
    },
    marginLeft: {
        marginLeft: 10
    },
    marginTop: {
        marginTop: 20
    },
    redColor: {
        color: 'red'
    },
    rowStyle: {
        marginTop: 50, 
        marginRight: 20, 
        marginLeft: 20
    },
    imageStyle: {
        height: 100, 
        flex: 1,
        margin: 10
    },
    viewCard: {
        flexDirection: 'column', 
        marginLeft : 10
    },
    borderColor: {
        borderColor: 'white'
    },
    rowTop: {
        marginTop: 10, 
        marginLeft: 10, 
        marginRight: 10
    },
    textCenter: {
        textAlign: 'center'
    },
    backgroundColor: {
        backgroundColor: '#7f0627'
    }


});
export default BookingDetail