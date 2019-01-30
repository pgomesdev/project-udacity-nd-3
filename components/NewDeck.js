import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions'

class NewDeck extends Component {
  state = {
    title: '',
  }

  onChange = (title) => {
    this.setState(() => ({
      title,
    }))
  }

  onPress = () => {
    if (!this.state.title) {
      return alert('The deck must have a title')
    }

    this.props.dispatch(handleAddDeck(this.state.title))

    this.setState(() => ({
      title: '',
    }))

    alert('Deck created!')
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.title}>Insert the title of your new Deck</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onChange}
          value={this.state.title}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.onPress}
        >
          <Text style={styles.submitButtonText}>Create Deck</Text>
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
    textAlign: 'center',
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

export default connect()(NewDeck)
