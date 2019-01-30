import { AsyncStorage } from 'react-native'
import { NOTIFICATION_KEY } from './helpers'

export const _getDecks = async function returnAllDecks () {
  const keys = await AsyncStorage.getAllKeys()

  const data = await Promise.all(
    keys.filter(key => key !== NOTIFICATION_KEY).map(key => AsyncStorage.getItem(key))
  )

  const decks = data.reduce((accumulator, currentValue) => {
    const deck = JSON.parse(currentValue)

    return {
      ...accumulator,
      [deck.title]: deck,
    }
  }, {})

  return decks
}

export const _getDeck = async function returnADeckById (id) {
  const deck = JSON.parse(await AsyncStorage.getItem(id))

  return deck
}

export const _saveDeckTitle = async function createADeck (title) {
  const key = title
  const data = {
    title,
    questions: [],
  }

  try {
    await AsyncStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    throw new Error (error)
  }
}

export const _addCardToDeck = async function addACardToADeck (title, card) {
  const key = title

  const deck = JSON.parse(await AsyncStorage.getItem(key))

  deck.questions.push(card)

  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(deck))
  } catch (error) {
    throw new Error (error)
  }
}
