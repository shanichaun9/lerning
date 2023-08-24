import { View, Text } from 'react-native'
import React, { memo } from 'react'

const ChildTwoCom = ({theme, count}) => {
  console.log('ChildTwoCom--------')
  // filter 10000 map 
  return (
    <View>
      <Text>ChildTwoCom</Text>
      <Text>Theme value:{theme}</Text>
    </View>
  )
}

export default memo(ChildTwoCom)