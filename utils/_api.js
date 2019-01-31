import { AsyncStorage } from 'react-native'

const DECK_KEY = 'Flashcards:decks'

export const _getDecks = async function returnAllDecks () {
  const keys = JSON.parse(await AsyncStorage.getItem(DECK_KEY))

  const data = keys ? Object.keys(keys).map(key => keys[key]) : []

  const decks = data.reduce((accumulator, currentValue) => {
    const deck = currentValue

    return {
      ...accumulator,
      [deck.title]: deck,
    }
  }, {})

  return decks
}

export const _getDeck = async function returnADeckById (id) {
  const deck = JSON.parse(await AsyncStorage.getItem(DECK_KEY))[id]

  return deck
}

export const _saveDeckTitle = async function createADeck (title) {
  const currentData = JSON.parse(await AsyncStorage.getItem(DECK_KEY))
  const key = title

  const data = {
    title,
    questions: [],
  }

  try {
    await AsyncStorage.setItem(DECK_KEY, JSON.stringify({
      ...currentData,
      [key]: data,
    }))
  } catch (error) {
    throw new Error (error)
  }
}

export const _addCardToDeck = async function addACardToADeck (title, card) {
  const currentData = JSON.parse(await AsyncStorage.getItem(DECK_KEY))
  const key = title

  const deck = JSON.parse(await AsyncStorage.getItem(DECK_KEY))[key]

  deck.questions.push(card)

  try {
    await AsyncStorage.setItem(DECK_KEY, JSON.stringify({
      ...currentData,
      [key]: deck,
    }))
  } catch (error) {
    throw new Error (error)
  }
}
