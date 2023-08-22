import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import ComSubSubOne from './comSubSubOne'
import { ThemeContext } from './context/MyContext'

export default function comSubOne() {
  const theme = useContext(ThemeContext)
  return (
    <View style={{borderWidth:1, borderColor: theme.theme === 'dark' ? 'red' : 'white',padding:10}}>
      <Text>comSubOne</Text>
      <ComSubSubOne />
    </View>
  )
}