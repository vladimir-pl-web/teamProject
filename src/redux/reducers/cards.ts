import { Dispatch } from "redux";
import { AddDataType, API, CardsType } from "../../api/api";
import { setTotalItemsAC } from "./pagination";

type InitCardsType = typeof initState
const initState = {
  cards: [] as Array<CardsType>,
  loading: false,
  error: ''
}

export type CardsActionType = ReturnType<typeof setLoading>
  | ReturnType<typeof setError>
  | ReturnType<typeof setCards>
   | ReturnType<typeof setTotalItemsAC>

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

export const getAllCards = (data?: AddDataType) => (dispatch: Dispatch) => {
 
  API.getCards(data)
    .then((res) => {
      dispatch(setCards(res.cardPacks))
      dispatch(setTotalItemsAC(+res.cardPacksTotalCount))
       dispatch(setLoading(false))
    })
    .catch((e) => {
    dispatch(setError(e.response.data.error));
    
  })
}