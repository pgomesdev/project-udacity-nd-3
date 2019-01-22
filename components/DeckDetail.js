import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class DeckDetail extends Component {
  addCard = () => {
    alert('Add card')
    // Redirect to add card screen
  }

  startQuiz = () => {
    alert('Start Quizz')
    // Redirect to quiz screen
  }

  render() {
    const deck = {
      id: '0',
      name: 'Deck1',
      cardsCount: 1,
    }

    return (
      <View>
        <Text>{deck.name}</Text>
        <Text>{deck.cardsCount} cards</Text>
        <TouchableOpacity
          onPress={this.addCard}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.startQuiz}
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckDetail