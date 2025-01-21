
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen1 from './Components/Screen1'
import Screen2 from './Components/Screen2'

const App = () => {
  return (
    <>
      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>Project01</Text>
      </View> */}
      <Screen2 />
      <Screen1 />
    </>
  )
}

export default App

const styles = StyleSheet.create({})