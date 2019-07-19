import { action } from 'typesafe-actions'
import { logUserActionTypes} from './types'

export const isLogUser = () => action(logUserActionTypes.is_log_user)
export const isLogoutUser = () => action(logUserActionTypes.is_logout_user)
export const isLogUserChange = () => action(logUserActionTypes.is_log_userChange)


