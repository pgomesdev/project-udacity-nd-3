import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
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
      question,
      answer,
    }
    const { id } = this.props.navigation.state.params

    if (!question || !answer) {
      return alert('The question and the answer must be filled')
    }

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
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.title}>Question</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.onChange(text, question)}
          value={this.state.question}
        />
        <Text style={styles.title}>Answer</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.onChange(text, answer)}
          value={this.state.answer}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.onPress}
        >
          <Text style={styles.submitButtonText}>Save Question</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    height: 40,
    margin: 10,
    padding: 10,
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
