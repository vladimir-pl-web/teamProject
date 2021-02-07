import { RegisterType } from "../actions/register";
import { GET_REGISTRATION_ERROR, REGISTER_NEW_USER, SET_LOADING } from "../types";

export type RegisterStateType = typeof initState;
const initState = {
  loading: false,
  error: '',
  user: ''
};

export const registerReducer = (state: RegisterStateType = initState,action: RegisterType): RegisterStateType => {
  switch (action.type) {
    case REGISTER_NEW_USER: 
      return { ...state, loading: false, error: '', user: action.user }
    case GET_REGISTRATION_ERROR:
      return { ...state, loading: false, error: action.error, user: '' }
    case SET_LOADING:
      return{...state, loading:true}
    default:
      return state;
  }
};
