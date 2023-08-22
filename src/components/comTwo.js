import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from './context/MyContext'

export default function comTwo({value}) {
  const theme = useContext(ThemeContext)
  return (
    <View style={{borderWidth:1, borderColor:theme.theme === 'dark' ? 'red' : 'white', padding: 10}}>
      <Text>comTwo</Text>
      <Text>{value}</Text>
    </View>
  )
}