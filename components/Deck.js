import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Deck = ({ deck }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{deck.title}</Text>
    <Text style={styles.cardCount}>{deck.questions.length} cards</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardCount: {
    fontSize: 15,
  },
})

export default Deck