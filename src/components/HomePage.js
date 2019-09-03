// import React, {Component} from 'react';
// import {Text, TextInput, Button, View, TouchableOpacity} from 'react-native';
// import {createStackNavigator} from 'react-navigation';

// export default class HomePage extends Component{
//     render(){
//         return(
//             <View style = {styles.container}>
//                 <Text style = {styles.text}>Welcome to my HomePage</Text>
//             </View>
//         );
//     }
// }
// const styles = {
//     container : {
//         padding : 20,
//         flex : 1,
//         backgroundColor : '#ecf0f1',
//         justifyContent : 'center',
//         alignItems : 'stretch'
//     },
//     text : {
//         textAlign : 'center',
//         color : 'black',
//         fontSize : 20
//     }
// }
import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export default class SearchBarExample extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}
