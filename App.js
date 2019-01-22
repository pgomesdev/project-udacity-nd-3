import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Decks from './components/Decks'
import DeckDetail from './components/DeckDetail'

const Stack = createStackNavigator({
  Decks: {
    screen: Decks,
  },
})

const AppContainer = createAppContainer(Stack)

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckDetail />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
