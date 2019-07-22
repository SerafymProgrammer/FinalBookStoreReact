
export type ApiResponse = Record<string, any>

export enum logUserActionTypes {
  IS_LOG_USER = '@@login/is_log_user',
  IS_LOGOUT_USER = '@@logout/is_logout_user',
  IS_LOG_USER_CHANGE = '@@login/is_log_userChange',

}

export interface isLogUserState {
  isLogUser: boolean;
}
  