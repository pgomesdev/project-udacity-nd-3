// External packages
import React from 'react'
import { StyleSheet, View } from 'react-native'
//import { createStackNavigator, createAppContainer } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Redux
import reducer from './reducers'
import middleware from './middleware'

// Components
import Decks from './components/Decks'
import DeckDetail from './components/DeckDetail'
import NewDeck from './components/NewDeck'

// const Stack = createStackNavigator({
//   Decks: {
//     screen: Decks,
//   },
// })

// const AppContainer = createAppContainer(Stack)

const store = createStore(reducer, middleware)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Decks />
        </View>
      </Provider>
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
