// External packages
import React from 'react'
import { View, StatusBar } from 'react-native'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'

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

const Tabs = createMaterialTopTabNavigator({
  Decks: {
    screen: Decks,
  },
  NewDeck: {
    screen: NewDeck,
  }
}, {
  navigationOptions: {
    header: null,
  },
})

const AppContainer = createAppContainer(Tabs)

const store = createStore(reducer, middleware)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: 'green', height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={'green'} />
          </View>
          <AppContainer />
        </View>
      </Provider>
    )
  }
}

export default App
