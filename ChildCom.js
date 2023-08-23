import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ChildCom({myFun}) {
  const [childCount, setChildCount] = useState([])
  console.log('ChildCom.js console')

  useEffect(()=>{
        setChildCount(myFun())
        console.log('useEffect of ChildCom update item')
  }, [myFun])
  
  return childCount.map((t)=> <Text>{t}</Text>)
}