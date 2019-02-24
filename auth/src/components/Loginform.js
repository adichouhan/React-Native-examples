import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native';
import firebase from 'firebase'
import {Card, Button, CardSection, Input, Spinner} from './common'

class LoginForm extends Component{
    state={email:'',
           password:'',
           error:''
           };
    
    onButtonPress(){
    const {email, password}=this.state 
    this.setState({error:'',  loading:true})
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(this.onLoginSuccess.bind(this))
    .catch(()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFailed.bind(this))
    })
}


    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:''
                })
    }

    onLoginFailed(){
        this.setState({error:'Authentication Failed', loading:false})
    }
    
    renderButton(){
        if(this.state.loading==false){
            <Spinner size='small'></Spinner>
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>  
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input label='Email' 
                      placeholder='UserEmail'
                      value={this.state.email}
                      onChangeText={email => this.setState({email})}></Input>
                </CardSection>
                <CardSection>
                    <Input
                    secureTextEntry
                    label='Password' 
                        placeholder='Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}></Input>
                </CardSection>
                <Text>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}


export default LoginForm 