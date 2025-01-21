import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increament,decreament } from '../Redux/Slice'
const Screen1 = () => {
    // useSelector me value ko access karne ka tarika ye hai ke Store.js me jo reducer ka name hai usko useSelector ke argument ke sath likho jaise abhi argument (e) hai air last me value likho jo aapne Slice me define kiye ho ye bhi ho sakta hai ke aapne waha value ko kisi aur name se define kiye hoge phir wo likhna padega Ex(e.First.value)
    // --- const Count = useSelector((e)=>console.warn(e)) ye bas check karne ke liye hai---


    const Count = useSelector((e)=>{
        return(e.First.value)
    })
   const dispatch=useDispatch()
   
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
       <Text style={{fontSize:40}}>Screen   0000001</Text>
      <Text style={{fontSize:40}}>  {Count} </Text>
      <View style={{height:40, width:300, display:'flex',flexDirection:'row', justifyContent:'space-around' }}>
      <Button title='Add' onPress={()=>{dispatch(increament())}}  />
      <Button title='Remove' onPress={()=>{dispatch(decreament())}} />
      </View>
      
    
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({})