/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'
import Router from './Router'

export default class App extends Component{

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyAK5wKPgoHxRGY7ghw60-ZSteVRvFaCj00",
      authDomain: "manger-64bba.firebaseapp.com",
      databaseURL: "https://manger-64bba.firebaseio.com",
      projectId: "manger-64bba",
      storageBucket: "manger-64bba.appspot.com",
      messagingSenderId: "149783619418"
    };

    firebase.initializeApp(config)
  }

  render() {
    const store=createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

