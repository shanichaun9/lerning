import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NativeModules } from 'react-native';

const { MyNativeModule} = NativeModules

export default function App() {
  console.log('nativemodules', MyNativeModule)
  useEffect(()=>{
    MyNativeModule.hello('this is the test message',(message) => {
      console.log(message,'meesage from android native code');
  });
console.log('usereffec called')
  }, [])
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}