import React from 'react'
import {Text, View} from 'react-native'


const Header=(props)=>{
    const {textStyle, viewStyle}=styles

    return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    )
}

const styles={
    viewStyle:{
        backgroundColor:'#F0F0F0',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddinTop:15,
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 7,
        position:'relative'
    },
    textStyle:{
        fontSize:20
    }
}

export default Header;
