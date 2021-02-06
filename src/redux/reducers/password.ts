import {ThunkAction} from 'redux-thunk'
import {RootStateType} from '../store';
import {passwordAPI} from '../../components/api/passwordAPI';

const initState = {
    isMessageSend: false as boolean,
    isNewPasswordSet: false as boolean,
    isFetching: false as boolean,
    isError: null as string | null
}

export const passwordReducer = (state: PasswordStateType = initState, action: PasswordActionsType): PasswordStateType => {
    switch (action.type) {
        case 'PASSWORD/SET-MESSAGE-SEND':
            return {...state,isMessageSend: action.isMessageSend}
        case 'PASSWORD/SET-NEW-PASSWORD':
            return {...state,isNewPasswordSet: true}
        case 'PASSWORD/SET-IS-FETCHING':
            return {...state,isFetching: action.isFetching}
        case 'PASSWORD/SET-IS-ERROR':
            return {...state,isError: action.isError}
        default:
            return state
    }
}

//ActionCreators
export const setMessageSendAC = (isMessageSend: boolean) =>
    ({type: 'PASSWORD/SET-MESSAGE-SEND', isMessageSend} as const)
const setNewPasswordAC = () => ({type: 'PASSWORD/SET-NEW-PASSWORD'} as const)
const setIsFetchingAC = (isFetching: boolean) => ({type: 'PASSWORD/SET-IS-FETCHING', isFetching} as const)
export const setErrorAC = (isError: string | null) => ({type: 'PASSWORD/SET-IS-ERROR', isError} as const)

//ThunkCreators
export const sendMessageToUser = (email: string): ThunkType => async (dispatch) => {
    dispatch(setIsFetchingAC(true))
    try {
        await passwordAPI.forgot(email)
        dispatch(setMessageSendAC(true))
        dispatch(setErrorAC(null))
    } catch (err) {
        if (err.response.data.error) {
            dispatch(setErrorAC(err.response.data.error))
        } else {
            dispatch(setErrorAC('Some Error occurred. Please try again'))
            console.log('Error:', {...err})
        }
    } finally {
        dispatch(setIsFetchingAC(false))
    }
}

export const setNewPassword = (password: string, token: string): ThunkType => async (dispatch) => {
    dispatch(setIsFetchingAC(true))
    try {
        await passwordAPI.setNewPassword(password, token)
        dispatch(setNewPasswordAC())
        dispatch(setErrorAC(null))
    } catch (err) {
        if (err.response.data.error) {
            dispatch(setErrorAC(err.response.data.error))
        } else {
            dispatch(setErrorAC('Some Error occurred. Please try again'))
            console.log('Error:', {...err})
        }
    } finally {
        dispatch(setIsFetchingAC(false))
    }
}

//Types
type PasswordStateType = typeof initState
type PasswordActionsType =
    ReturnType<typeof setMessageSendAC> |
    ReturnType<typeof setNewPasswordAC> |
    ReturnType<typeof setIsFetchingAC> |
    ReturnType<typeof setErrorAC>
type ThunkType = ThunkAction<void, RootStateType, unknown, PasswordActionsType>



