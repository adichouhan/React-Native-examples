import React from 'react'
import {TextInput, Text, View ,ActivityIndicator} from 'react-native'


const Spinner=({size})=>{
    
    return (
    <View style={styles.SpinnerStyle}>
        <ActivityIndicator size={size||'large'}></ActivityIndicator>
    </View>
    )
}


const styles={
    SpinnerStyle:{
        alignItems: 'center',
        flex:1,
        justifyContent: 'center',
    }
}

export {Spinner};