import axios from 'axios';
import { LoginDataType } from '../redux/reducers/profile';
//  `https://neko-back.herokuapp.com/2.0`

type LoginResponseType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number; // количество колод
  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean; // подтвердил ли почту
  rememberMe: boolean;
  error?: string;
}

const messageForRecoveryPassword =
  `<div>
       To recover your password, follow the link:
        <br/> 
          <a href='https://VovanVovanic.github.io/teamProject/#/NewPass/$token$'>
            https://VovanVovanic.github.io/teamProject/#/NewPass/
           </a>
     </div>`


let instance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
  // baseURL: `http://localhost:7542/2.0/`,
  withCredentials: true,
})

// const herokuInstance = axios.create({
//   baseURL: 'https://neko-back.herokuapp.com/2.0',
//   withCredentials: true
// })

export type userRegType = {
  email: string
  password: string
}
export const API = {
  getResponse() {
    const date = Date.now().toString()
    return instance.get(`ping?frontTime=${date}`).then(response => response.data)
  },
  register(data: userRegType) {
    return instance.post('auth/register/', data).then(response => response.data)
  },
  login(payload: LoginDataType) {
    return instance.post(`auth/login/`, payload).then(response => response.data)
  },
  forgotPassword(email: string) {
    return instance.post('auth/forgot', {
      email,
      from: 'Microsoft<pharm.sale777@gmail.com>',
      message: messageForRecoveryPassword
    })
  },
  setNewPassword(password: string, resetPasswordToken: string) {
    return instance.post<{ info: string }>('auth/set-new-password', { password, resetPasswordToken })
  },
  logout() {
    return instance.delete(`auth/me/`, {}).then(response => response.data)
  },
  isAuth() {
    return instance.post(`auth/me/`, {}).then(response => response.data)
  },
  updateUser(name: string, avatar: string) {
    return instance.put(`auth/me/`, { name, avatar }).then((response) => response.data)
  },
  getCards(data?: AddDataType) {
    return instance.get<CardsResponseType>(`cards/pack/?&page=${data?.page}&pageCount=${data?.pageCount}&sortPacks=${data?.sortPacks}name&min=${data?.min}&max=${data?.max}`).then((response) => response.data)
  },
  deletePack(id: string) {
    return instance.delete(`cards/pack/?id=${id}`).then((response) => response.data)
  },
  addPack() {
    return instance.post(`cards/pack/`, {cardsPack:{name: 'New'}}).then((response) => response.data)
  },
  updatePack(id: string) {
    return instance.put(`cards/pack/`, {cardsPack:{ _id: id,name:'NewNameUpdated' } }).then((response) => response.data)
  },
    getSinglecardPack(id: string) {
    return instance.get<SingleCardResponseType>(`cards/card/?&cardsPack_id=${id}`).then((response) => response.data)
  },
}
export type AddDataType = {
  packName?: string
  min?: string
  max?: string
  sortPacks?: string
  page?: string
  pageCount?: string
}

export type CardsResponseType = {
  cardPacks: Array<CardsType>
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
  token: string
  tokenDeathTime: number
}

export type CardsType = {
  cardsCount: number
  created: string
  grade: number
  more_id: string
  name: string
  path: string
  private: boolean
  rating: number
  shots: number
  type: string
  updated: string
  user_id: string
  user_name: string
  __v: number
  _id: string
}
export type SingleCardResponseType = {
  cards: Array<SingleCardType>
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  packUserId: string
}
 
export type SingleCardType = {
  answer: string
  question: string
  cardsPack_id: string
  grade: number
  rating: number
  shots: number
  type: string
  user_id: string
  created: string
  updated: string
  __v: number
  _id: string
}