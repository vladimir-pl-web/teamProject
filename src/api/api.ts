import axios from "axios";

//  `https://neko-back.herokuapp.com/2.0`

let instance = axios.create({
  baseURL: `http://localhost:7542/2.0/`,
  withCredentials: true,
})

const herokuInstance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0',
  withCredentials: true
})

const messageForRecoveryPassword =
    `<div>
       To recover your password, follow the link:
        <br/> 
          <a href='http://localhost:3000/teamProject#/NewPass/$token$'>
            http://localhost:3000/teamProject#/NewPass/$token$
           </a>
     </div>`

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

export const passwordAPI = {
  forgot(email: string) {
    return herokuInstance.post('auth/forgot', {
      email,
      from: 'Mars<pharm.sale777@gmail.com>',
      message: messageForRecoveryPassword
    })
  },
  setNewPassword(password: string, resetPasswordToken: string) {
    return herokuInstance.post<{ info: string }>('auth/set-new-password', {password, resetPasswordToken})
  }
}

