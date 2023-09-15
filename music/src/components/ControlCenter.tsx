import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import TrackPlayer, { State, usePlaybackState } from "react-native-track-player";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { playbackService } from "../../musicPlayerServices";

export const ControlCenter =()=>{

    const playBackState = usePlaybackState()

    const skiptoNext = async ()=>{
        await TrackPlayer.skipToNext()
    }
    const previousbtn= async()=>{
        await TrackPlayer.skipToPrevious()
    }
    const toggleplayback = async (playblack:State)=>{
        const currenttrack = await TrackPlayer.getCurrentTrack()

        if(currenttrack !==null){
            if(playblack === State.Paused || playblack===State.Ready){
                await TrackPlayer.play()
            }
            else{
                await TrackPlayer.pause()
            }
        }
    }
    

    return(
        <View style={styles.container}>
            <Pressable onPress={previousbtn}>
                <Icon style={styles.icon} name="skip-previous" size = {40}/>
            </Pressable>
            <Pressable onPress={()=>toggleplayback(playBackState)}>
                <Icon style={styles.icon} 
                name={playBackState === State.Playing?"pause":"play-arrow"}
                size = {75}/>
            </Pressable>
            <Pressable onPress={skiptoNext}>
                <Icon style={styles.icon} name="skip-next" size = {40}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
  
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });