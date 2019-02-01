import { createMaterialTopTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import Decks from '../components/Decks'
import DeckDetail from '../components/DeckDetail'
import NewDeck from '../components/NewDeck'
import NewCard from '../components/NewCard'
import Quiz from '../components/Quiz'

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

export const AppContainer = createAppContainer(Stack)