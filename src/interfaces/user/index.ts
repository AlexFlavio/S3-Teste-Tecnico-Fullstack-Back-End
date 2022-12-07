import { Icontacts } from "../contacts"
export interface IUserCreateRequest {
    name: string
    email: string
    password: string
    telefones: string[]
}


export interface IUserCreateResponse {
    id: string
    name: string
    email: string
    password: string
    telefones: string[]
    contacts: Icontacts[]
}


