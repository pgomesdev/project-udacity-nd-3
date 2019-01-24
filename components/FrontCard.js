import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const FrontCard = ({ question, checkAnswer }) => (
  <View>
    <Text>{question}</Text>
    <TouchableOpacity onPress={checkAnswer}>
      <Text>Check answer</Text>
    </TouchableOpacity>
  </View>
)

export default FrontCard
