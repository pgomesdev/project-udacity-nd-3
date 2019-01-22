import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Deck = ({ deck }) => (
  <View>
    <Text>{deck.title}</Text>
    <Text>{deck.questions.length} cards</Text>
  </View>
)

export default Deck