import { _saveDeckTitle, _addCardToDeck } from '../utils/_api'

export const ADD_CARD = 'ADD_CARD'
export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'

function addCard (id, card) {
  return {
    type: ADD_CARD,
    id,
    card,
  }
}

export function handleAddCard (title, card) {
  return async dispatch => {
    try {
      await _addCardToDeck(title, card)

      dispatch(addCard(title, card))
    } catch (error) {
      throw new Error(error)
    }
  }
}

function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function handleAddDeck (title) {
  title = title.trim()
  
  return async dispatch => {
    try {
      await _saveDeckTitle(title)
    } catch (error) {
      // alert a error
      alert('An error ocurred while creating a deck')
    }
    
    const deck = {
      [title]: {
        title,
        questions: [],
      }
    }

    dispatch(addDeck(deck))
  }
}

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}
