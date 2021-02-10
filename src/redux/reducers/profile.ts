import {Dispatch} from "redux";
import {API} from "../../api/api";

//types constants
enum ACTION_TYPES {
    SET_USER_DATA = "SET_USER_DATA",
    SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'
}

//Common types
export type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

type ProfileStateType = {
    user: User,
    isAuthSuccess: boolean,
    error: string,
}

export type User = {
    email: string,
    name: string,
    avatar: string | undefined,
    publicCardPacksCount: number | null,
    verified: boolean,
    rememberMe: boolean,
}

//Action Creators Type
type SetUserDataActionType = {
    type: ACTION_TYPES.SET_USER_DATA,
    user: User,
}

type SetErrorMessage = {
    type: ACTION_TYPES.SET_ERROR_MESSAGE,
    error: string
}

type AllActionsTypes = SetUserDataActionType | SetErrorMessage

//Reducer
const initState = {
    user: {
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: null,
        verified: false,
        rememberMe: false,
    },
    isAuthSuccess: false,
    error: '',
}

export const profileReducer = (state: ProfileStateType = initState, action: AllActionsTypes): ProfileStateType => {
    switch (action.type) {
        case ACTION_TYPES.SET_USER_DATA:
            return {
                ...state,
                user: action.user,
                isAuthSuccess: true,
            }
        case ACTION_TYPES.SET_ERROR_MESSAGE:
            return  {
                ...state,
                isAuthSuccess: false,
                error: action.error,
            }
        default:
            return state
    }
}

//ActionCreators
const setUserDataAC = (user: User) => {
    return {
        type: ACTION_TYPES.SET_USER_DATA,
        user,
    }
}

const setErrorMessageAC = (error: string) => {
    return {
        type: ACTION_TYPES.SET_ERROR_MESSAGE,
        error
    }
}

//ThunkCreators
export const setUserDateTC = (payload: LoginDataType) => async (dispatch: Dispatch) => {
    try {
        const res = await API.login(payload);
        debugger
        const {
            avatar,
            email,
            name,
            publicCardPacksCount,
            rememberMe,
            verified,
        } = res.data

        const user = {
            avatar,
            email,
            name,
            publicCardPacksCount,
            rememberMe,
            verified,
        }
        dispatch(setUserDataAC(user))

    } catch (e) {
        const error = e.response ? e.response.data.error : `${e.message} more details in the console`
        debugger
        console.log('Error: ', {...e})
        dispatch(setErrorMessageAC(error))
    }
}

