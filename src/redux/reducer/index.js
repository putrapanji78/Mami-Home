import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import listrent from './listrent';

export default combineReducers({
    rent: listrent
})