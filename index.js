
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/redux/reducer';

const store = createStore(reducer);

const AppRent = () =>
        <Provider store={store}>
                <App/>
        </Provider>;


AppRegistry.registerComponent(appName, () => AppRent);

