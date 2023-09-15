import TrackPlayer, { Event, RepeatMode } from "react-native-track-player";

import { playListData } from "./src/constants";

export async function setupPlayer(){
    let issetup = false;
    try{
        await TrackPlayer.getCurrentTrack()
        issetup=true
    }catch(error){
        await TrackPlayer.setupPlayer()
        issetup=true
    }finally{
        return issetup
    }
}
export async function addTrack(){
    await TrackPlayer.add(playListData)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}
export async function playbackService(){

    TrackPlayer.addEventListener(Event.RemotePause,()=>{
        TrackPlayer.pause()
    })
    TrackPlayer.addEventListener(Event.RemotePlay,()=>{
        TrackPlayer.play()
    })
    TrackPlayer.addEventListener(Event.RemotePrevious,()=>{
        TrackPlayer.skipToPrevious()
    })
    TrackPlayer.addEventListener(Event.RemoteNext,()=>{
        TrackPlayer.skipToNext()
    })
    
}
