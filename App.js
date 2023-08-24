import { View, Text, Button, TextInput } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('dark')
  const [text, setText] = useState('')
  const [countArr, setCountArr] = useState([])

  // const getName = useMemo(() =>{
  //   console.log('generate array called')
  //   console.log('axio post metho api to retive the data', theme)
  //   return [count, count + 1 , count + 2]
  // },[count])

  // const getName = () =>{
  //   console.log('generate array called')
  //   console.log('axio post metho api to retive the data', theme)
  //   return [count, count + 1 , count + 2]
  // }

  useEffect(()=>{
    console.log('useEffect called', count)
    // setCountArr([1,2,3])
  },[count])

  const setTheSameValue = () =>{
    // console.log('setThemSameValue', countArr)
    // setCountArr([1,2,3])
    setCount(0)
  }

  return (
    <View>
      <Text>Parent component</Text>
      <Text>count:{count}</Text>
      <Text>Them:{theme}</Text>
      {countArr.map((i)=>{
        // console.log('map function called', i)
        return <Text>{i}</Text>
      })}
      <TextInput onChangeText={(e)=>{setText(e)}} value={text}/>
      <Button title='Add'  onPress={()=> setCount((preState)=> preState + 1)}></Button>
      <Button title='change Theme'  onPress={()=> setTheme((preState)=> preState === 'dark' ? 'light' : 'dark')}></Button>
      <Button title='change Theme'  onPress={setTheSameValue}></Button>

    </View>
  )
}