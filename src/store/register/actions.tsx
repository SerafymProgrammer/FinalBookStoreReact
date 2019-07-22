import { action } from 'typesafe-actions'
import { RegisterActionTypes, UserRegister} from './types'

export const registerRequest = (data: UserRegister) => action(RegisterActionTypes.REGISTER_REQUEST, data)

export const registerSuccess = () => action(RegisterActionTypes.REGISTER_SUCCESS)

export const registerError = (message: string) => action(RegisterActionTypes.REGISTER_ERROR, message)

