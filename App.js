import { View, Text, Button } from 'react-native'
import React, { createContext, useState } from 'react'
import ComOne from './src/components/comOne'
import ComTwo from './src/components/comTwo'

import MyContext from './src/components/context/MyContext';
import ClassCom from './src/components/ClassCom';
export default function App() {
  return (
    <>
    <MyContext>
    <View>
     <ComOne/>
     <ComTwo />
     <ClassCom />
     <Text>asdfa sdfasdf</Text>
    </View>
    <Text>context insdie </Text>

    </MyContext>
    </>
  )
}