import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { ThemeContext } from './context/MyContext'

export default class ClassCom extends Component {
  render() {
    return (
        <ThemeContext.Consumer>
           {({theme}) => (
        <Text>class test {theme}</Text>
      )}
    
      </ThemeContext.Consumer>
    //  <View>
    //   <Text>asdfasdfsdaf</Text>
    //   </View>
    )
  }
}