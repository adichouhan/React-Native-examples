import React, { Component } from 'react'
import {Text, Button, View} from 'react-native'
import firebase from 'firebase'
import {Header, Spinner} from './components/common'
import LoginForm from './components/Loginform'

export default class App extends Component {

  state={loggedIn:null}

  componentWillMount(){ 
    firebase.initializeApp({
        apiKey: "AIzaSyD4fFow-n-pXOVd190zyGHZNFBVzEwIrn4",
        authDomain: "authentication-e950a.firebaseapp.com",
        databaseURL: "https://authentication-e950a.firebaseio.com",
        projectId: "authentication-e950a",
        storageBucket: "authentication-e950a.appspot.com",
        messagingSenderId: "498155143297"
      })

      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          this.setState({loggedIn:true})
        }else{
          this.setState({loggedIn:false})
        }
      })
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
         return(<Button title='Logout' onPress={()=>firebase.auth().signOut()}>Log out</Button>)
      case false:
         return(<LoginForm/>)
      default:
         return(<Spinner size="large"/>)   
    }
  }

  render() {
    return (
        <View>
            <Header headerText="Authentication"/>
            {this.renderContent()}
      </View>
    )
  }
}
