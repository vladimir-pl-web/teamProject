
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import { profileReducer } from "./reducers/profile";
import { registerReducer } from "./reducers/register";
import {passwordReducer} from './reducers/password';
import { cardsReducer } from "./reducers/cards";
import { paginationReducer } from "./reducers/pagination";
import { singleCardReducer } from "./reducers/singleCard";
const reducers = combineReducers({
  register: registerReducer,
  profile: profileReducer,
  password: passwordReducer,
  cards: cardsReducer,
  pagination: paginationReducer,
  singlePack: singleCardReducer,
});


type rootReducerType = typeof reducers
export type RootStateType = ReturnType<rootReducerType>
const store = createStore(reducers, applyMiddleware(thunk))
// @ts-ignore
window.store = store;
export default store