import { View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import TrackPlayer ,{
    useTrackPlayerEvents,
    Event,
    Track

} from 'react-native-track-player'
import { playListData } from '../constants'
import Songinfo from '../components/Songinfo'
import Sliderkj from '../components/Sliderl'
import { ControlCenter } from '../components/ControlCenter'

const {width}= Dimensions.get('window')
 function Musicplayer() {
    const [track, setTrack] = useState()
    useTrackPlayerEvents([Event.PlaybackTrackChanged],async event =>{
      switch (event.type) {
        case Event.PlaybackTrackChanged:
        const playingTrack= await TrackPlayer.getTrack(event.nextTrack)
          setTrack(playingTrack)
          break;
      
        default:
          break;
      }
    })

const renderArtWork =()=>{
  return(
    <View style={styles.listArtWrapper}>
      <View style={styles.albumContainer}>
        {track?.artwork && (
            <Image 
            style={styles.albumArtImg}
            source={{uri:track?.artwork?.toString()}}
            />
        )}
      </View>
    </View>
  )
}

  return (
    <View style={styles.container}>
     <FlatList nestedScrollEnabled
     horizontal
     data={playListData}
     renderItem={renderArtWork}
     keyExtractor={song=>song.id.toString()}/>
     <Songinfo track={track}/>
     <Sliderkj/>
     <ControlCenter/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001d23',
      },
      listArtWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
      },
      albumContainer: {
        width: 300,
        height: 300,
      },
      albumArtImg: {
        height: '100%',
        borderRadius: 4,
      },
})
export default Musicplayer;