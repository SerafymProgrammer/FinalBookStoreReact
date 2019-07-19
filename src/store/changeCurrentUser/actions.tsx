import { action } from 'typesafe-actions'

import { ChangeUserActionTypes, ChangeUserState} from './types'
import User from '../register/types';

export const changeUserRequest = (data: User) => action(ChangeUserActionTypes.CHANGE_USER_REQUEST, data)

export const changeUserSuccess = (img: string) => action(ChangeUserActionTypes.CHANGE_SUCCESS)



