
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import diceone from '../assets/One.png'
import diceTwo from '../assets/Two.png'
import diceThree from '../assets/Three.png'
import dicefour from '../assets/Four.png'
import dicefive from '../assets/Five.png'
import dicesix from '../assets/Six.png'

type diceprops = PropsWithChildren<{
  imageUrl :ImageSourcePropType
  imgs :ImageSourcePropType
}>
//todo:
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
const Dice =({imgs,imageUrl}:diceprops):JSX.Element =>{
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
      <Image style={styles.diceImage} source={imgs}/>
    </View>
  )
}

function App():JSX.Element{

  const [dice,setdice]=useState<ImageSourcePropType>(diceone)
  const [dicesone,setdicesone] =useState<ImageSourcePropType>(diceTwo)


  function rolldice(){
  let randomNumber = Math.floor(Math.random()*6)+1;
  switch(randomNumber){
    case 1:
      setdice(diceone)
      setdicesone(dicefive)
      break
    case 2:
      setdice(diceTwo)
      setdicesone(dicefour)
      break
    case 3:
      setdice(diceThree)
      setdicesone(diceThree)
      break
    case 4:
      setdice(dicefour)
      setdicesone(diceTwo)
      break
    case 5:
      setdice(dicefive)
      setdicesone(dicesix)
      break
    case 6:
      setdice(dicesix)
      setdicesone(diceone)
      break
    default:
      setdice(diceone)
      setdicesone(dicefive)

  }
  ReactNativeHapticFeedback.trigger("impactLight", options);
}

  return(
    <>
      <View style={styles.container}>
        <Dice imageUrl={dice} imgs={dicesone}/>
        <Pressable onPress={rolldice}>
          <Text style={styles.rollDiceBtnText}> roll the dice</Text>
        </Pressable>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
export default App;
