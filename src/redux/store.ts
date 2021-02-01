
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import { loginReducer } from "./reducers/login";
import { profileReducer } from "./reducers/profile";
import { registerReducer } from "./reducers/register";
const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  profile: profileReducer,
});


type rootReducerType = typeof reducers
export type RootStateType = ReturnType<rootReducerType>
const store = createStore(reducers, applyMiddleware(thunk))
// @ts-ignore
window.store = store;
export default store