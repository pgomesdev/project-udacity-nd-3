// External packages
import React from 'react'
import { View, StatusBar } from 'react-native'
import { createMaterialTopTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
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
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'

// Notification
import { setLocalNotification } from './utils/helpers'

const Tabs = createMaterialTopTabNavigator({
  Decks: {
    screen: Decks,
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    }
  }
}, {
  navigationOptions: {
    header: null,
  },
})

const Stack = createStackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDetail: {
    screen: DeckDetail,
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      title: 'New Card',
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
    },
  },
}, {
  navigationOptions: {
    header: null,
  }
})

const AppContainer = createAppContainer(Stack)

const store = createStore(reducer, middleware)

class App extends React.Component {
  componentDidMount() {
    return setLocalNotification()
  }

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
