import {Dispatch} from "redux";
import {API} from "../../api/api";

//types constants
enum ACTION_TYPES {
    SET_USER_DATA = "SET_USER_DATA",
    SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE',
    SET_USER_LOADING = 'SET_USER_LOADING'
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
    loading: boolean
}

export type User = {
    email: string,
    name: string,
    avatar: string | undefined,
    publicCardPacksCount: number | null,
    verified: boolean,
    rememberMe: boolean,
    message: string
}

//Action Creators Type
type SetUserDataActionType = {
    type: ACTION_TYPES.SET_USER_DATA,
    user: User,
    isAuth:boolean
}

type SetErrorMessage = {
    type: ACTION_TYPES.SET_ERROR_MESSAGE,
    error: string
}

type SetUserLoading = {
    type: ACTION_TYPES.SET_USER_LOADING
    loading: boolean
}
type AllActionsTypes = SetUserDataActionType | SetErrorMessage | SetUserLoading

//Reducer
const initState = {
    user: {
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: null,
        verified: false,
        rememberMe: false,
        message: ''
    },
    isAuthSuccess: false,
    error: '',
    loading: false
}

export const profileReducer = (state: ProfileStateType = initState, action: AllActionsTypes): ProfileStateType => {
    switch (action.type) {
        case ACTION_TYPES.SET_USER_DATA:
            return {
                ...state,
                user: action.user,
                isAuthSuccess: action.isAuth,
                error: ''
            }
        case ACTION_TYPES.SET_ERROR_MESSAGE:
            return  {
                ...state,
                isAuthSuccess: false,
                error: action.error,
            }
        case ACTION_TYPES.SET_USER_LOADING:
            return {
                ...state, loading:action.loading
            }
        default:
            return state
    }
}

//ActionCreators
const setUserDataAC = (user: User, isAuth:boolean) => {
    return {
        type: ACTION_TYPES.SET_USER_DATA,
        user,
        isAuth
    }
}
const setUserLoadingAC = (loading: boolean) => {
    return {
        type: ACTION_TYPES.SET_USER_LOADING,
        loading
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
    dispatch(setUserLoadingAC(true))
    try {
        const res = await API.login(payload)
        const {
            avatar,
            email,
            name,
            publicCardPacksCount,
            rememberMe,
            verified,
        } = res

        const user = {
            avatar,
            email,
            name,
            publicCardPacksCount,
            rememberMe,
            verified,
            message: `${email} successfully logged`
        }
        dispatch(setUserDataAC(user, true))
        if (!avatar || !name){
            try {
            const newData = await API.updateUser('User', 'some url')
             console.log(newData);
                
            }
            catch (e) {
                
            }
        }

    } catch (e) {
        const error = e.response ? e.response.data.error : `${e.message} more details in the console`
        console.log('Error: ', {...e})
        dispatch(setErrorMessageAC(error))
    }
    dispatch(setUserLoadingAC(false))
}

export const deleteUserTC = () => async (dispatch: Dispatch) => {
    dispatch(setUserLoadingAC(true))
    try {
        await API.logout()
        dispatch(setUserDataAC({
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: null,
        verified: false,
        rememberMe: false,
        message: ''}, false))
    }
    catch (e) {
    dispatch(setErrorMessageAC('Something gonna wrong'))
    }
    dispatch(setUserLoadingAC(false))
}

export const isUserAuth = () => async (dispatch: Dispatch) => {
    dispatch(setUserLoadingAC(true))
    try {
        const data = await API.isAuth()
        const {avatar,email,name,publicCardPacksCount,rememberMe,verified} = data

        const user = {
            avatar,
            email,
            name,
            publicCardPacksCount,
            rememberMe,
            verified,
            message: `${email} successfully logged`
        }
        dispatch(setUserDataAC(user, true))
        
    }
    catch (e) {
        const error = {...e };
         dispatch(setErrorMessageAC(error.response.data.error))
        
        
    }
    dispatch(setUserLoadingAC(false))
}