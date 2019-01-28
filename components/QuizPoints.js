import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const QuizPoints = ({ points, restartQuiz, backToDeck }) => (
  <View>
    <Text>You got {points} questions right!</Text>
    <TouchableOpacity onPress={restartQuiz}>
      <Text>Restart Quiz</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={backToDeck}>
      <Text>Back To Deck</Text>
    </TouchableOpacity>
  </View>
)

export default QuizPoints
