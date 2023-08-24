import { View, Text } from 'react-native'
import React, { memo, useEffect } from 'react'


const ChildCom = ({count}) => {
  console.log('ChildCom---------')

  return (
    <View>
      <Text>ChildCom</Text>
      <Text>Count:{count}</Text>
    </View>
  )
}

export default ChildCom