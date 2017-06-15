import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory} from 'react-router';
import promise from 'redux-promise';
import { ReduxRouter, reduxReactRouter  } from 'redux-router';
import RavenMiddleware from 'redux-raven-middleware';

import routes from './routes';
import reducers from './reducers';

import './../node_modules/bootstrap/dist/css/bootstrap.css';
import '../assets/style.css';
import './../node_modules/jquery/dist/jquery.min';
window.jQuery = window.$ =  require('jquery/dist/jquery.min');
import './../node_modules/bootstrap/dist/js/bootstrap.min';


const createStoreWithMiddleware = applyMiddleware( promise)(createStore);

//RavenMiddleware('https://2aaf2cd12083455f9f7515882d08e283@sentry.4-com.pro/27'),


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        {routes}
    </Provider>
    , document.querySelector('.wrapper'));
