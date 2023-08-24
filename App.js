import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeModules } from 'react-native';
import ChildCom from './ChildCom';
import ChildTwoCom from './ChildTwoCom';

export default function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('dark')
  return (
    <View>
      <Text>Parent component</Text>
      <Button title='Add'  onPress={()=> setCount((preState)=> preState + 1)}></Button>
      <Button title='change Theme'  onPress={()=> setTheme((preState)=> preState === 'dark' ? 'light' : 'dark')}></Button>
      <ChildCom count={count}/>
      <ChildTwoCom theme={theme} count={count}/>

    </View>
  )
}