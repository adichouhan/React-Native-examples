import React from 'react'
import {View, Text, Image, Linking} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail=({album})=>{
    const {title, artist, thumbnail_image, image, url}=album

    return( 
        <Card>
            <CardSection>
                <View styles={styles.thumbnailContainerStyle}>
                    <Image source={{uri:thumbnail_image}} style={styles.thumbnailstyle}/>
                </View>
                <View style={styles.headerStyle}>
                 <Text style={styles.headerTextStyle}> {title}</Text>
                 <Text>Artist:{artist}</Text>
                 </View>
            </CardSection>
            <CardSection>
                <Image source={{uri:image}} style={styles.imageStyle}/>
            </CardSection>

            <CardSection>
                <Button onPress={()=>{Linking.openURL(url)}}>
                  Buy Now
                </Button>
            </CardSection>
        </Card>
    )
}

const styles={
    headerStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerTextStyle:{
        fontSize:18
    },

    thumbnailstyle:{
        height:50,
        width:50
    },

    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:15,
        marginRight:15
    },

    imageStyle:{
        height:300,
        flex:1,
        width:null
    }
}

export default AlbumDetail