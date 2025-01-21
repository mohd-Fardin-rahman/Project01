import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Screen2 = () => {
    const MyData = useSelector((e)=>{
       return(e.First.value)
    })
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:40}}>Home Screen  002</Text>
      <Text style={{fontSize:40}}>{MyData}</Text>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({})