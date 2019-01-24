import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { id } = navigation.state.params

    return {
      title: id,
    }
  }

  addCard = () => {
    this.props.navigation.navigate(
      'NewCard',
      { id: this.props.navigation.state.params.id }
    )
  }

  startQuiz = () => {
    alert('Start Quizz')
    // Redirect to quiz screen
  }

  render() {
    const { id } = this.props.navigation.state.params
    const deck = this.props.decks[id]

    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cardCount}>{deck.questions.length} cards</Text>
        </View>
        <TouchableOpacity
          onPress={this.addCard}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.startQuiz}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    decks: state,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#000',
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#000',
    padding: 5,
    width: '50%',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  cardCount: {
    fontSize: 30,
  },
})

export default connect(mapStateToProps)(DeckDetail)