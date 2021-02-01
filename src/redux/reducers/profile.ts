type ProfileStateType = typeof initState
const initState = {

}

export const profileReducer = (state: ProfileStateType = initState, action: any): ProfileStateType => {
  switch (action.type) {
    default: return state
  }
}