import { RootStateType } from './../store';
import { API, userRegType } from "../../api/api"
import { GET_REGISTRATION_ERROR, REGISTER_NEW_USER, SET_REG_LOADING } from "../types"
import { Dispatch } from "redux"
export type RegisterType = ReturnType<typeof onRegister> | ReturnType<typeof onError> | ReturnType<typeof onRegLoading>

export const onRegister = (user: string) => {
  return {
    type: REGISTER_NEW_USER,
    user
  }as const 
}
export const onError = (error: string) => {
  return {
    type: GET_REGISTRATION_ERROR,
    error
  }as const 
}

export const onRegLoading = () => {
  return{type:SET_REG_LOADING} as const
}

export const makeRegistration = (data: userRegType) => async (dispatch: Dispatch, getState: RootStateType) => {
  try {
    dispatch(onRegLoading())
    const user = await API.register(data)

    dispatch(onRegister(`${user.addedUser.name} successfully registered`))
  }
  catch(e) {
    const errors = { ...e }
    let errorMsg = errors.response.data.error
    dispatch(onError(errorMsg))
  }
}