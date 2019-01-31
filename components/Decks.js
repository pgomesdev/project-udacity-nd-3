import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
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
        <AppLoading />
      )
    }

    const decks = Object.keys(this.props.decks).map(key => this.props.decks[key])

    if (decks.length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>You don't have decks yet</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        {decks && <FlatList
          data={decks}
          keyExtractor={(item) => item.title}
          renderItem={this.renderItem}
        />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
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