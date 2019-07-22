import { action } from 'typesafe-actions'
import { logUserActionTypes} from './types'

export const isLogUser = () => action(logUserActionTypes.IS_LOG_USER)
export const isLogoutUser = () => action(logUserActionTypes.IS_LOGOUT_USER)
export const isLogUserChange = () => action(logUserActionTypes.IS_LOG_USER_CHANGE)


