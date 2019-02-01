import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from '../actions'

export default function decks (state = {}, action) {
  switch (action.type) {
    case ADD_CARD:
      const questions = state[action.payload.id].questions

      questions.push(action.payload.card)

      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          questions,
        },
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck,
      }
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    default:
      return state
  }
}
