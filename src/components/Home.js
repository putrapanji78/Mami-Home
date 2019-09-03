import React,{Component} from 'react'
import {View} from 'react-native'
import MamiHome from './MamiHome'
import {createStore} from 'redux'
import reducers from '../redux/reducer'
import {Provider} from 'react-redux'

const store = createStore(reducers)

class Home extends Component{
    render(){
        return(
            <Provider store={store} style={{flex : 1}}>
            <View style={{flex :1}}>
                <MamiHome />
            </View>
            </Provider>
        )
    }
}

export default Home;