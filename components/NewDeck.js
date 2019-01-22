import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
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
    this.props.dispatch(handleAddDeck(this.state.title))

    this.setState(() => ({
      title: '',
    }))
  }

  render() {
    return (
      <View>
        <Text>Insert the title of your new Deck</Text>
        <TextInput
          onChangeText={this.onChange}
          value={this.state.title}
        />
        <TouchableOpacity
          onPress={this.onPress}
        >
          <Text>Create Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(NewDeck)
