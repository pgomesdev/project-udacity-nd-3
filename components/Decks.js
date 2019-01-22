import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { _getDecks } from '../utils/_api'
import Deck from './Deck'

class Decks extends Component {
  state = {
    ready: false,
  }

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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Deck deck={item} />}
        />}
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

const mapStateToProps = ({ decks }) => {
  return {
    decks,
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