import { action } from 'typesafe-actions'
import { UsersListActionTypes} from './types'
import { User } from '../register/types';

export const usersListRequest = () => action(UsersListActionTypes.USERS_LIST_REQUEST)

export const usersListSuccess = (data: User[]) => action(UsersListActionTypes.USERS_LIST_SUCCESS, data)
export const usersListError = (message: string) => action(UsersListActionTypes.USERS_LIST_ERROR, message)


