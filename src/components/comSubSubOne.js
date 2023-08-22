import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from './context/MyContext'

export default function comSubSubOne() {
  const data = useContext(ThemeContext)
  return (
    <View style={{borderWidth:1, borderColor:data.theme === "dark" ? 'red':'white', padding:10}}>
      <Text>comSubSubOne</Text>
      <Text>data:{JSON.stringify(data)}</Text>
      <Button title="dark" onPress={()=> data.setTheme("dark")}></Button>
    <Button title="light" onPress={()=> data.setTheme("light")}></Button>
    </View>
  )
}