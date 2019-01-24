import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleAddCard } from '../actions'

const question = 'question'
const answer = 'answer'

class NewCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  onPress = async () => {
    const { question, answer } = this.state
    const card = {
      question, answer
    }
    const { id } = this.props.navigation.state.params

    await this.props.addCard(id, card)
    
    this.props.navigation.navigate(
      'DeckDetail',
      { id }
    )
  }

  onChange = (content, input) => {
    this.setState(() => ({
      [input]: content,
    }))
  }

  render() {
    const { id } = this.props.navigation.state.params

    return (
      <View>
        <Text>Question</Text>
        <TextInput
          onChangeText={(text) => this.onChange(text, question)}
          value={this.state.question}
        />
        <Text>Answer</Text>
        <TextInput
          onChangeText={(text) => this.onChange(text, answer)}
          value={this.state.answer}
        />
        <TouchableOpacity
          onPress={this.onPress}
        >
          <Text>Save Question</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (title, card) => {
      dispatch(handleAddCard(title, card))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCard)
