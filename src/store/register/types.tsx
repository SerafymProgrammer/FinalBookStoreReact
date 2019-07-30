
export  interface User {
    id: number;
    password?: string;
    email: string;
    passsword:string;
    img: string;
    userToken: string
  }
  
  export interface UserRegister{
    email: string;
    password:string;
  }

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
  