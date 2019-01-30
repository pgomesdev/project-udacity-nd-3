import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const FrontCard = ({ question, checkAnswer }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{question}</Text>
    <TouchableOpacity
      style={styles.submitButton}
      onPress={checkAnswer}
    >
      <Text style={styles.submitButtonText}>Check answer</Text>
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
    margin: 10,
  },
  submitButton: {
    backgroundColor: 'black',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
})

export default FrontCard
