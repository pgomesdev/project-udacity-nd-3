import { _saveDeckTitle } from '../utils/_api'

export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'

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
