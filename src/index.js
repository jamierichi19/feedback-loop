import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';



const feelingReducer = (state=[], action)=>{
    if(action.type === `FEELING`){
        return action.payload;
    }
    return state;
}
const supportedReducer = (state=[], action)=>{
    if(action.type === `SUPPORTED`){
        return action.payload;
    }
    return state;
}
const understandReducer = (state=[], action)=>{
    if(action.type === `UNDERSTAND`){
        return action.payload;
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandReducer,
        supportedReducer
    }),
    applyMiddleware(logger)
)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
