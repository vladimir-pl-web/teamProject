type LoginStateType = typeof initState
const initState = {
  login: '',
  password: ''
}

export const loginReducer = (state: LoginStateType = initState, action: any): LoginStateType => {
  switch (action.type) {
    default: return state
  }
}