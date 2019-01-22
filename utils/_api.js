import { AsyncStorage } from 'react-native'

export const _getDecks = async function returnAllDecks () {
  const keys = await AsyncStorage.getAllKeys()

  const decks = await keys.reduce(async (accumulator, key) => {
    const deck = await AsyncStorage.getItem(key)

    return {
      ...accumulator,
      [key]: JSON.parse(deck),
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
