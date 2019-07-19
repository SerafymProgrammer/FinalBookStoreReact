import { action } from 'typesafe-actions'
import { RegisterActionTypes, UserRegister} from './types'

export const fetchRequest = (data: UserRegister) => action(RegisterActionTypes.REGISTER_REQUEST, data)

export const fetchSuccess = () => action(RegisterActionTypes.REGISTER_SUCCESS)

export const fetchError = (message: string) => action(RegisterActionTypes.REGISTER_ERROR, message)

