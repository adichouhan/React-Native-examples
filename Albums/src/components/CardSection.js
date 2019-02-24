import React from 'react'
import {Text, View} from 'react-native'


const CardSection=(props)=>{
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles={
    containerStyle:{
        borderWidth:1,
        padding:10,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative', 
    }
}


export default CardSection;