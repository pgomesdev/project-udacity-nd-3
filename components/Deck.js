import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Deck = ({ deck }) => (
  <View>
    <Text>{deck.name}</Text>
    <Text>{deck.cardsCount} cards</Text>
  </View>
)

export default Deck