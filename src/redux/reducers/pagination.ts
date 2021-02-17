enum ACTION_TYPES  {
    SET_ACTIVE_PAGE = "Pagin/SET_ACTIVE_PAGE",
    SET_PAGINATION = "Pagin/SET_PAGE_RANGE_DISPLAYED",
    SET_TOTAL_ITEMS = "Pagin/SET_TOTAL_ITEMS"
}

type initialStateType = {
    pageRangeDisplayed: number,
    activePage: number,
    itemsCountPerPage: number,
    totalItemsCount: number,
}

const initialState = {
    // Это цифры самой компоненты, сколько показывать (от 1 до 5 или от 1 до 10), по дефолту 10
    pageRangeDisplayed: 10,

    // Активная страница
    activePage: 1,

    //Это пагинация, какими порциями показывать карты, дефолт 10
    itemsCountPerPage: 10,

    //Сколько всего прийдет карт - сюда надо сетать из get запроса, AC и логику написал, пока хардкод 5000
    totalItemsCount: 5000,
}

type SetActivePageActionType = {
    type: ACTION_TYPES.SET_ACTIVE_PAGE,
    pageNumber: number
}

type SetPaginationActionType = {
    type: ACTION_TYPES.SET_PAGINATION,
    itemsCountPerPage: number,
}

type SetTotalItemsActionType = {
    type: ACTION_TYPES.SET_TOTAL_ITEMS,
    totalItems: number,
}

type AllActionTypes = SetActivePageActionType | SetPaginationActionType | SetTotalItemsActionType

export const paginationReducer = (state: initialStateType = initialState, action: AllActionTypes): initialStateType  => {
    switch (action.type) {
        case ACTION_TYPES.SET_ACTIVE_PAGE:
            return {...state, activePage: action.pageNumber}
        case ACTION_TYPES.SET_PAGINATION:
            return {...state, itemsCountPerPage: action.itemsCountPerPage}
        case ACTION_TYPES.SET_TOTAL_ITEMS:
            return {...state, totalItemsCount: action.totalItems}
        default:
            return state
    }
}

export const setActivePageAC = (pageNumber: number): SetActivePageActionType => {
    return {
        type: ACTION_TYPES.SET_ACTIVE_PAGE,
        pageNumber,
    }
}

export const setPaginationAC = (itemsCountPerPage: number): SetPaginationActionType => {
    return {
        type: ACTION_TYPES.SET_PAGINATION,
        itemsCountPerPage,
    }
}

export const setTotalItemsAC = (totalItems: number): SetTotalItemsActionType => {
    return {
        type: ACTION_TYPES.SET_TOTAL_ITEMS,
        totalItems,
    }
}


