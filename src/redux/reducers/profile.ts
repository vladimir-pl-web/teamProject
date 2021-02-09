import {Dispatch} from "redux";
import {API} from "../../api/api";

enum ACTION_TYPES {
    SET_USER_DATA = "SET_USER_DATA",
}

export type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

type ProfileStateType = {
    user: User,
    isAuth: boolean
}


type User = {
    email: string,
    name: string,
    avatar: string | undefined,
    publicCardPacksCount: number | null,
    verified: boolean,
    rememberMe: boolean,
    error?: string | undefined,
}

type SetUserDataActionType = {
    type: ACTION_TYPES.SET_USER_DATA,
    user: User,
}

type AllActionsTypes = SetUserDataActionType


const initState = {
    user: {
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: null,
        verified: false,
        rememberMe: false,
        error: '',
    },
    isAuth: false,
}

export const profileReducer = (state: ProfileStateType = initState, action: AllActionsTypes): ProfileStateType => {
    debugger
    switch (action.type) {
        case ACTION_TYPES.SET_USER_DATA:
            return {
                ...state,
                user: action.user,
                isAuth: true
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

//ThunkCreators
export const setUserDateTC = (payload: LoginDataType) => async (dispatch: Dispatch) => {
    try {
        const res = await API.login(payload);
        const {
            avatar,
            email,
            name,
            publicCardPacksCount,
            rememberMe,
            verified,
            error,
        } = res.data

        const user = {
            avatar,
            email,
            name,
            publicCardPacksCount,
            rememberMe,
            verified,
            error,
        }
        dispatch(setUserDataAC(user))
        debugger

    } catch (e) {

    }

}

