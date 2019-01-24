import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const BackCard = ({ answer, submitAnswer }) => (
  <View>
    <Text>{answer}</Text>
    <TouchableOpacity onPress={() => submitAnswer(true)}>
      <Text>Correct</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => submitAnswer(false)}>
      <Text>Wrong</Text>
    </TouchableOpacity>
  </View>
)

export default BackCard
