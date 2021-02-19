import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AddDataType, API, CardsType } from "../../api/api";
import { RootStateType } from "../store";
import { setTotalItemsAC } from "./pagination";

type InitCardsType = typeof initState
const initState = {
  cards: [] as Array<CardsType>,
  loading: false,
  error: '',
  min: 1,
  max: 10
}

export type CardsActionType = ReturnType<typeof setLoading>
  | ReturnType<typeof setError>
  | ReturnType<typeof setCards>
  | ReturnType<typeof setTotalItemsAC>
  | ReturnType<typeof setMinMax>
  | ReturnType<typeof deleteCardPack>
  | ReturnType<typeof addCardPack>
  | ReturnType<typeof updateCardPack>

export const setLoading = (loading:boolean) => {
  return{type: 'SET_LOADING', loading}as const
}
export const setError = (error: string) => {
  return{type: 'SET_ERROR', error}as const
}

export const setCards = (cards: Array<CardsType>) => {
  return{type: 'SET_CARDS', cards}as const
}
export const setMinMax = (min: number, max: number) => {
  return{type: 'SET_MIN_MAX', min, max}as const
}
export const deleteCardPack = (id:string) => {
  return{type: 'DELETE_PACK', id }as const
}
export const addCardPack = (pack:CardsType) => {
  return{type: 'ADD_PACK', pack}as const
}
export const updateCardPack = (pack:CardsType) => {
  return{type: 'UPDATE_PACK', pack}as const
}
export const cardsReducer = (state: InitCardsType = initState, action: CardsActionType): InitCardsType => {

  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.loading }
    case 'SET_ERROR':
      return { ...state, error: action.error, loading: false }
    case 'SET_CARDS':
      return { ...state, cards: action.cards, error: '' }
    case 'SET_MIN_MAX':
      return { ...state, min: action.min, max: action.max }
    case 'DELETE_PACK':
      return { ...state, }
      case 'ADD_PACK':
      return{...state, cards:[...state.cards, action.pack]}
    default: return state
  }
}

export const getAllCards = (data?: AddDataType) => (dispatch: Dispatch) => {
  
 dispatch(setLoading(true))
  API.getCards(data)
    .then((res) => {
      dispatch(setCards(res.cardPacks))
      dispatch(setTotalItemsAC(+res.cardPacksTotalCount))
      dispatch(setMinMax(+res.minCardsCount, +res.maxCardsCount))
      dispatch(setLoading(false))
    })
    .catch((e) => {
    dispatch(setError(e.response.data.error));
    
  })
}
export const deleteCards = (id: string) => (dispatch: ThunkDispatch<RootStateType, any,CardsActionType>) => { 
   dispatch(setLoading(true))
  API.deletePack(id)
    .then((res) => {
      dispatch(getAllCards());
      dispatch(setLoading(false))
    })
    .catch((e) => {
    dispatch(setError(e.response.data.error));
    
  })
}
export const addCards = () => (dispatch: ThunkDispatch<RootStateType, any,CardsActionType>) => { 
   dispatch(setLoading(true))
  API.addPack()
    .then((res) => {
      dispatch(getAllCards());
      dispatch(setLoading(false))
    })
    .catch((e) => {
    dispatch(setError(e.response.data.error));
    
  })
}
export const updateCards = (id: string) => (dispatch: ThunkDispatch<RootStateType, any, CardsActionType>) => { 
   dispatch(setLoading(true))
  API.updatePack(id)
    .then((res) => {
      dispatch(getAllCards());
      dispatch(setLoading(false))
    })
    .catch((e) => {
    dispatch(setError(e.response.data.error));
    
  })
}