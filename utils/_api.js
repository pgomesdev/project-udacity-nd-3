import { AsyncStorage } from 'react-native'

export const _getDecks = async function returnAllDecks () {
  const keys = await AsyncStorage.getAllKeys()

  const decks = keys.reduce(async (accumulator, key) => {
    return {
      ...accumulator,
      [key]: await JSON.parse(AsyncStorage.getItem(key)),
    }
  }, {})

  return {
    decks,
  }
}

export const _getDeck = async function returnADeckById (id) {
  const deck = await JSON.parse(AsyncStorage.getItem(id))

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

  const deck = await JSON.parse(AsyncStorage.getItem(key))

  deck.questions.push(card)

  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(deck))
  } catch (error) {
    throw new Error (error)
  }
}
