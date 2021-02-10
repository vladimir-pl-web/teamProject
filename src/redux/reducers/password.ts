import {ThunkAction} from 'redux-thunk'
import {RootStateType} from '../store';
import {passwordAPI} from '../../api/api';

const initState = {
    isMessageSend: false as boolean,
    isNewPasswordSet: false as boolean,
    isFetching: false as boolean,
    isError: null as string | null
}

export const passwordReducer = (state: PasswordStateType = initState, action: PasswordActionsType): PasswordStateType => {
    switch (action.type) {
        case 'PASSWORD/SET-MESSAGE-SEND':
        case 'PASSWORD/SET-IS-FETCHING':
        case 'PASSWORD/SET-IS-ERROR':
            return {...state, ...action.payload}
        case 'PASSWORD/SET-NEW-PASSWORD':
            return {...state, isNewPasswordSet: true}
        default:
            return state
    }
}

//Actions
export const setMessageSendAC = (isMessageSend: boolean) =>
    ({type: 'PASSWORD/SET-MESSAGE-SEND', payload: {isMessageSend}} as const)
const setNewPasswordAC = () => ({type: 'PASSWORD/SET-NEW-PASSWORD'} as const)
const setIsFetchingAC = (isFetching: boolean) =>
    ({type: 'PASSWORD/SET-IS-FETCHING', payload: {isFetching}} as const)
export const setErrorAC = (isError: string | null) =>
    ({type: 'PASSWORD/SET-IS-ERROR', payload: {isError}} as const)

//Thunks
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
