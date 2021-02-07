type LoginStateType = typeof initState
const initState = {
    email: '',
    password: '',
    rememberMe: false,
}

export const loginReducer = (state: LoginStateType = initState, action: any): LoginStateType => {
    switch (action.type) {
        default:
            return state
    }
}

