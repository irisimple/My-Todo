import {combineReducers} from 'redux';
import nameReducers from './nameReducers';
import markerReducer from './markerReducer';

export default combineReducers({
    name:nameReducers,
    markers:markerReducer
});