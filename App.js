import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import { NativeModules } from 'react-native';

const { MyNativeModule} = NativeModules

export default function App() {
  // const [name, setName] = useState('')
  // const [phone, setPhone] = useState('')
  // const [address, setAddress] = useState('')
  // const [userName, setUserName] = useState('')


  const [state, dispatch] = useReducer((state, action)=>{
    switch (action.type) {
      case 'nameAction':
        return {...state, name:action.payload}
        case 'phoneAction':
          return {...state, phone:action.payload}
          case 'addressAction':
            return {...state, address:action.payload}
            case 'userNameAction':
              return {...state, userName:action.payload}
      default:
        return state
    }
  },{
    name:"",
phone:"",
address:"",
userName:""
  });

  return (
    <View>
     <TextInput style={{borderWidth:1, borderColor:'white'}} onChangeText={(e) => dispatch({type: "nameAction", payload: e})} value={state.name}/>
     <TextInput style={{borderWidth:1, borderColor:'white'}} onChangeText={(e) => dispatch({type: "phoneAction", payload: e})} value={state.phone}/>
     <TextInput style={{borderWidth:1, borderColor:'white'}} onChangeText={(e) => dispatch({type: "addressAction", payload: e})} value={state.address}/>
     <TextInput style={{borderWidth:1, borderColor:'white'}} onChangeText={(e) => dispatch({type: "userNameAction", payload: e})} value={state.userName}/>
     <Text>name: {state.name}</Text>
     <Text>phone: {state.phone}</Text>
     <Text>address: {state.address}</Text>
     <Text>userName: {state.userName}</Text>
    </View>
  )
}