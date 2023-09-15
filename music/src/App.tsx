import React,{useState,useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {setupPlayer,addTrack} from '../musicPlayerServices'
import Musicplayer from './screens/Musicplayer';


function App(): JSX.Element {
  const [isplayerReady,setisPlayerReady]=useState(false) 
async function setup() {
  let isSetup = await setupPlayer()

  if(isSetup){
    await addTrack()
  }
  setisPlayerReady(isSetup)
}

  useEffect(()=>{
    setup()
  },[])

  if(!isplayerReady){
    return(
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <Musicplayer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default App;
