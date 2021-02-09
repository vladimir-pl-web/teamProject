import axios from "axios";
import {LoginDataType} from "../redux/reducers/profile";
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


let instance = axios.create({
    baseURL: `http://localhost:7542/2.0/`,
    withCredentials: true,
})

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
        return instance.post<LoginResponseType>(`auth/login`, payload)
    }
}

