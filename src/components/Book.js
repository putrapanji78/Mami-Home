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
    Picker, CheckBox, Badge} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import {SliderBox} from 'react-native-image-slider-box';


class Book extends Component{
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            chosenDate: new Date(),
            selected2: ''
        };
        this.setDate = this.setDate.bind(this);
      }
      onValueChange2(value: string) {
        this.setState({
          selected2: value
        });
      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
      
    render(){
        return(
            <Container>
                {/* <Header style={styles.head}>
                <StatusBar backgroundColor='#ff80ed' barStyle="light-content"/>
                <Button transparent>
            
                    <Icon name="left" size={20} color="white"></Icon>
                        </Button>
                                <Body><Title style={{textAlign :'center'}}>Booking</Title></Body>  
                    </Header> */}
                    
                        {/* <Grid>
                        <Row>
                            <Col>
                            <Card>
                        <CardItem>
                        <Image source={{uri: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768'}} style={{height: 100, width: 50, flex: 1}}/>
                            <View style={{flexDirection: 'column', marginLeft : 10}}>
                        <Text>Kost MamiRoom ada apa dengan mu</Text>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text >Booking</Text>
                            <Text style={{marginLeft: 70}}>Durasi</Text>
                        </View>
                            <View style={{flexDirection: 'row'}}>
                        <Text >12 Agustus 2018</Text>
                            <Text style={{marginLeft: 20}}>1 Hari</Text>
                        </View>
                            <Badge style={{marginTop: 20, backgroundColor:'#ff80ed'}}>
                    <Text style={{color: 'white'}}>Telah dikonfirmasi</Text>
                        </Badge>
                        </View>
                        </CardItem>
                        
                    </Card>
                    </Col>
                        </Row>
                    </Grid> */}

            <Container >
                <Header style={styles.head}>
                <StatusBar backgroundColor='#ff80ed' barStyle="light-content"/>
                <Button transparent>
                    <Icon name="left" size={20} color="white"></Icon>
                        </Button>
                                <Body><Title style={{textAlign :'center'}}>Booking</Title></Body>  
                    </Header>
                    <Content>
                        <Card>
                            <CardItem>
                            <Grid>    
                            <Col style={styles.col3}>
                                <View>  
                                <Image source={{uri: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768'}} style={{height:100,flex: 1}}/>
                                </View>
                            </Col>
                            <Col style={styles.col7}>
                                <Row>
                                    <Text >Kost MamiRoom ada apa dengan mu</Text>
                                </Row>    
                                <Row>    
                                <Col>
                                    <Text >Booking</Text>
                                </Col>
                                <Col>
                                    <Text >12 Agustus 2019</Text>
                                </Col>
                                </Row>     
                                <Row>
                                <Col>
                                    <Text >Durasi</Text>
                                </Col>
                                <Col>
                                    <Text >1 hari</Text>
                                </Col>
                                </Row>    
                                <Badge style={styles.button}>
                                    <Text style={styles.textwhite}>Telah dikonfirmasi</Text>
                                </Badge>
                        </Col>
                        </Grid>
                        </CardItem>
                        
                    </Card>
                   
                       
                </Content>
            </Container>
        </Container>
        );
    }
}

const styles = StyleSheet.create({
    head: {
        backgroundColor: '#ff80ed'
    },
    button: {
        margin: 10,
        backgroundColor: '#ff80ed',
        justifyContent: "center"
    },
    textwhite: {
        color: 'white'
    },
    col3: {
        flex:3,
        margin:10
    },
    col7 : {
        flex:7,
        margin:10
    }
     
});
export default Book