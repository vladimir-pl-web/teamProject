import axios from 'axios';

const passwordInstance = axios.create({
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

export const passwordAPI = {
    forgot(email: string) {
        return passwordInstance.post('auth/forgot', {
            email,
            from: 'Mars<pharm.sale777@gmail.com>',
            message: messageForRecoveryPassword
        })
    },
    setNewPassword(password: string, resetPasswordToken: string) {
        return passwordInstance.post<{ info: string }>('auth/set-new-password', {password, resetPasswordToken})
    }
}