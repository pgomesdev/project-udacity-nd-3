import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const BackCard = ({ answer, submitAnswer }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{answer}</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.correctButton}
        onPress={() => submitAnswer(true)}
      >
        <Text style={styles.submitButtonText}>Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.wrongButton}
        onPress={() => submitAnswer(false)}
      >
        <Text style={styles.submitButtonText}>Wrong</Text>
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  correctButton: {
    backgroundColor: 'green',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-start',
  },
  wrongButton: {
    backgroundColor: 'red',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
})

export default BackCard
