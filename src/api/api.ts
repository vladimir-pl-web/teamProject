import axios from "axios";

//  `https://neko-back.herokuapp.com/2.0`

let instance = axios.create({
  baseURL: `http://localhost:7542/2.0/`,
  withCredentials: true,
})

export type userRegType = {
  email: string
  password: string
}
export const API = {
  getResponse(){
  return instance.get('ping/').then(response => response.data)
  },
  register(data:userRegType){
    return instance.post('auth/register/',data ).then(response => response.data)
  }
}

