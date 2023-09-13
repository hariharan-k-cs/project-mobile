import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type {PropsWithChildren} from 'react'

type currencyBut = PropsWithChildren<{
    name:string;
    flag:string;

}>

export default function Buttons(props:currencyBut):JSX.Element {

  return (
    <ScrollView><View style ={
        styles.buttoncontainer}>
        <Text style ={styles.flags}>{props.flag}</Text>
        <Text style ={styles.country}>{props.name}</Text>
    </View></ScrollView>
    
  )
}

const styles = StyleSheet.create({
    buttoncontainer:{
        alignItems:'center'

    },
    flags:{
        fontSize:28,
        color:'#ffffff',
        marginBottom:4

    },
    country:{
        fontSize:14,
        color:'#2d3436',
        
    },
})