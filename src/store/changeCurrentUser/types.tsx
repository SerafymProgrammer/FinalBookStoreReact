
export default interface User extends ApiResponse {
    id: number;
    email: string;
    passsword:string;
    img: string;
  }

  export type ApiResponse = Record<string, any>
  
  export enum ChangeUserActionTypes {
    CHANGE_USER_REQUEST = '@@change_user/CHANGE_USER_REQUEST',
    CHANGE_SUCCESS = '@@register/CHANGE_SUCCESS',
  }
  
  export interface ChangeUserState {
   img: string
  }
  