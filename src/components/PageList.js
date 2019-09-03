import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Tabs, Tab, Content, Card, CardItem, Left, Badge} from 'native-base';
import {StatusBar, StyleSheet} from 'react-native';
import ContentList from './ContentList';
import Maps from './Map';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default class PageList extends React.Component {
  render() {
    const {navigation} = this.props;
        const loginId = navigation.getParam('loginstat', 0)
        const iddata = navigation.getParam('iddata', 0);
        
    return (
      <Container>
        <Header searchBar rounded style={styles.backGround}>
        <StatusBar backgroundColor='#7f0627' barStyle="light-content" />
        <AntDesign name="arrowleft" size={25} color="white" style={styles.andDesign} onPress={() => this.props.navigation.navigate('MamiHome')}/>
          <Item>
            
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Tabs>
          
          <Tab heading="Map"
            tabStyle={styles.backGround}
            activeTabStyle={styles.backGround} 
            
            textStyle={styles.colorWhite}
          >
           <Maps/> 
          </Tab>
          <Tab heading="Lihat Daftar" 
          tabStyle={styles.backGround}
          activeTabStyle={styles.backGround} 
          
          textStyle={styles.colorWhite}
         >
           <Text></Text>
          <ContentList loginId2={loginId} iddata={iddata}  content={this.props.navigation}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  colorWhite: {
    color: 'white'
  },
  backGround: {
    backgroundColor: '#7f0627'
  },
  andDesign: {
    marginTop: 15, 
    marginRight: 15
  }
});
