import React from 'react'
import { Text } from 'react-native'
import { purple } from '../utils/colors'

export default function DateHeader ({ date }) {
  return (
    <Text style={{color: purple, fontSize: 25}}>
      {typeof date.getMonth === 'function' ? date.toLocaleDateString() : null}
    </Text>
  )
}