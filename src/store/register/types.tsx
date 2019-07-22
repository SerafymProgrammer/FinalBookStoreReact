
export default interface User extends ApiResponse {
    id: number;
    email: string;
    passsword:string;
    img: string;
  }
  
  export interface UserRegister extends ApiResponse {
    email: string;
    passsword:string;
  }

  export type ApiResponse = Record<string, any>
  

  export enum RegisterActionTypes {
    REGISTER_REQUEST = '@@register/REGISTER_REQUEST',
    REGISTER_SUCCESS = '@@register/REGISTER_SUCCESS',
    REGISTER_ERROR = '@@register/REGISTER_ERROR',
  }

  export interface RegisterState {
    readonly loading: boolean
    readonly data: UserRegister
    readonly errors?: string
  }
  