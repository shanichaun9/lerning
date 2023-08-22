import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import ComSubOne from './comSubOne'
import { ThemeContext } from './context/MyContext';

export default function comOne(props) {
  const theme = useContext(ThemeContext);
  return (
    <View style={{borderWidth:1, borderColor:theme.theme === "dark" ? 'red':'white', padding:10}}>
      <Text>comOne</Text>
      <Text>THEME:{JSON.stringify(theme)}</Text>
      <ComSubOne />
    </View>
  )
}