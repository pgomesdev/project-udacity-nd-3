import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const QuizPoints = ({ points, restartQuiz, backToDeck }) => (
  <View style={styles.container}>
    <Text style={styles.title}>You got {points} questions right!</Text>
    <TouchableOpacity
      style={styles.submitButton}
      onPress={restartQuiz}
    >
      <Text style={styles.submitButtonText}>Restart Quiz</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.submitButton}
      onPress={backToDeck}
    >
      <Text style={styles.submitButtonText}>Back To Deck</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  submitButton: {
    backgroundColor: 'black',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    width: '50%',
    borderRadius: 2,
    margin: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
  },
})

export default QuizPoints
