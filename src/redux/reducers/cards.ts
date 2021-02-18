import { Dispatch } from "redux";
import { API, CardsType } from "../../api/api";

type InitCardsType = typeof initState
const initState = {
  cards: [] as Array<CardsType>,
  loading: false,
  error: ''
}

export type CardsActionType = ReturnType<typeof setLoading> | ReturnType<typeof setError> | ReturnType<typeof setCards>

export const setLoading = (loading:boolean) => {
  return{type: 'SET_LOADING', loading}as const
}
export const setError = (error: string) => {
  return{type: 'SET_ERROR', error}as const
}

export const setCards = (cards: Array<CardsType>) => {
  return{type: 'SET_CARDS', cards}as const
}


export const cardsReducer = (state: InitCardsType = initState, action: CardsActionType): InitCardsType => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.loading }
    case 'SET_ERROR':
      return { ...state, error: action.error, loading: false }
    case 'SET_CARDS':
      return { ...state, cards:action.cards, error: ''}
    default: return state
  }
}

export const getAllCards = () => (dispatch:Dispatch)=>{
  dispatch(setLoading(true))
  API.getCards()
    .then((res) => {
      dispatch(setCards(res.cardPacks))
       dispatch(setLoading(false))
    })
    .catch((e) => {
    dispatch(setError(e.response.data.error));
    
  })
}