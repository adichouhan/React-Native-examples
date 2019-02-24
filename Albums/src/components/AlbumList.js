
import { ScrollView} from 'react-native'
import React, { Component } from 'react'
import axios from  'axios'
import AlbumDetail from './AlbumDetail'

 class AlbumList extends Component {

   state={ albums:[] }

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
     .then(response=> this.setState({albums : response.data}))
  }

  renderAlbums(){
   return this.state.albums.map(album=><AlbumDetail key={album.title} album={album}></AlbumDetail>)
  }

   render() {
     console.log(this.state)
     return (
            <ScrollView>
              {this.renderAlbums()}
            </ScrollView>
      )
   }
 }

 export default AlbumList;