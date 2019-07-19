
export type ApiResponse = Record<string, any>

export enum logUserActionTypes {
  is_log_user = '@@login/is_log_user',
  is_logout_user = '@@logout/is_logout_user',
  is_log_userChange = '@@login/is_log_userChange',

}

export interface isLogUserState {
  isLogUser: boolean;
}
  