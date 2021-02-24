
import { Dispatch } from "redux";
import { API, SingleCardType } from "../../api/api";

type SingleCardsInitType = typeof initState
const initState = {
  card: [] as Array<SingleCardType>,
  loading: false,
  error: ''
}

export type SingleCardActionType = ReturnType<typeof setSingleCard> | ReturnType<typeof setSingleCardLoading> | ReturnType<typeof setSingleCardError> | ReturnType<typeof addSingleCard>


export const setSingleCard = (card: Array<SingleCardType>) => {
  
  return { type: 'SET_SINGLE_CARD', card } as const
}

export const addSingleCard = (card:SingleCardType) => {
  return { type: 'ADD_SINGLE_CARD', card } as const
}

export const setSingleCardLoading = (load: boolean) => {
  return { type: 'SET_SINGLE_LOADING', load } as const
}
export const setSingleCardError = (error: string) => {
  return { type: 'SET_SINGLE_ERROR', error } as const
}
export const singleCardReducer = (state: SingleCardsInitType = initState, action: SingleCardActionType): SingleCardsInitType => {
  switch (action.type) {
    case 'SET_SINGLE_CARD':
      return { ...state, card: action.card, error: '' }
    case 'SET_SINGLE_LOADING':
      return { ...state, loading: action.load }
    case 'SET_SINGLE_ERROR':
      return { ...state, loading: false, error: action.error }
        case 'ADD_SINGLE_CARD':
      return { ...state, card:[...state.card, action.card] }
    default: return state
  }
}

export const getSinglePack = (id: string) => (dispatch: Dispatch) => {
  
   dispatch(setSingleCardLoading(true))
  API.getSinglecardPack(id)
    .then((res) => {
      dispatch(setSingleCard(res.cards))
      // dispatch(setTotalItemsAC(+res.cardPacksTotalCount))
      // dispatch(setMinMax(+res.minCardsCount, +res.maxCardsCount))
        dispatch(setSingleCardLoading(false))
    })
    .catch((e) => {
    dispatch(setSingleCardError(e.response.data.error));
    
  })
}

export const addSinglePack = (id: string) => (dispatch: Dispatch) => {
   dispatch(setSingleCardLoading(true))
  API.addSinglecardPack(id)
    .then((res) => {
      dispatch(setSingleCard(res.cards))
      // dispatch(setTotalItemsAC(+res.cardPacksTotalCount))
      // dispatch(setMinMax(+res.minCardsCount, +res.maxCardsCount))
        dispatch(setSingleCardLoading(false))
    })
    .catch((e) => {
    dispatch(setSingleCardError(e.response.data.error));
    
  })
}

export const sendGrade = (id: string, grade: number) => (dispatch: Dispatch) => {
  dispatch(setSingleCardLoading(true))
  API.sendGrade(grade, id)
      .then((res) => {
        dispatch(setSingleCardLoading(false))
      })
      .catch((e) => {
        dispatch(setSingleCardError(e.response.data.error));
      })
}