import { View, Text, Button, TextInput } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { NativeModules } from 'react-native';
import ChildCom from './ChildCom';

const { MyNativeModule} = NativeModules

export default function App() {

  const [count, setCount] = useState(0)
  const [test, setTest] = useState(false)


  const myFun = useCallback(() =>{
    return [count, count + 1, count + 2]
  },[count])
  console.log('App.js console')
  return (
    <View>
      <Text>Count:{count}</Text>
      <Text>test:{test ? 'true' : 'false'}</Text>
      <TextInput onChangeText={(e)=> setCount(Number(e))} value={count}/>
      <Button title='Parent data' onPress={()=> {setTest((pre => !pre))}}/>
      <ChildCom myFun={myFun}/>
    </View>
  )
}