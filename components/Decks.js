import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { _getDecks } from '../utils/_api'
import Deck from './Deck'

class Decks extends Component {
  state = {
    ready: false,
  }

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate(
      'DeckDetail',
      { id: item.title }
    )}>
      <Deck deck={item} />
    </TouchableOpacity>
  )

  async componentDidMount() {
    const decks = await _getDecks()

    this.props.getDecks(decks)

    this.setState(() => ({
      ready: true,
    }))
  }

  render() {
    const { ready } = this.state

    if (!ready) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      )
    }

    const decks = Object.keys(this.props.decks).map(key => this.props.decks[key])

    if (decks.length === 0) {
      return (
        <View>
          <Text>You don't have decks yet</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        {this.props.decks && <FlatList
          data={decks}
          keyExtractor={(item) => item.title}
          renderItem={this.renderItem}
        />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
})

const mapStateToProps = (state) => {
  return {
    decks: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDecks: (decks) => {
      dispatch(receiveDecks(decks))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks)