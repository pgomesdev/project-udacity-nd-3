import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Deck from './Deck'

class Decks extends Component {
  render() {
    const decks = [
      {
        id: '0',
        name: 'Deck1',
        cardsCount: 1,
      },
    ]

    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Deck deck={item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Decks