enum ACTION_TYPES {
    SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
}

type SetSearchValueActionType = {
    type: ACTION_TYPES.SET_SEARCH_VALUE,
    searchValue: string
}

type AllActionTypes = SetSearchValueActionType

type InitialStateType = {
    searchValue: string
}

const initialState = {
    searchValue: '',
}

export const findReducer = (state: InitialStateType = initialState, action: AllActionTypes): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPES.SET_SEARCH_VALUE:
            return {...state, searchValue: action.searchValue}
    }
    return state
}

export const setSearchValueAC = (searchValue: string): SetSearchValueActionType => {
    return {
        type: ACTION_TYPES.SET_SEARCH_VALUE,
        searchValue,
    }
}