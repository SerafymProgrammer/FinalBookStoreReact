// This file holds our state type, as well as any other types related to this Redux store.

// Response object for GET /heroes
// https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes%2Fget
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
  
  // This type is basically shorthand for `{ [key: string]: any }`. Feel free to replace `any` with
  // the expected return type of your API response.
  export type ApiResponse = Record<string, any>
  
  // Use `const enum`s for better autocompletion of action type names. These will
  // be compiled away leaving only the final value in your compiled code.
  //
  // Define however naming conventions you'd like for your action types, but
  // personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
  // of Redux's `@@INIT` action.
  export enum RegisterActionTypes {
    REGISTER_REQUEST = '@@register/REGISTER_REQUEST',
    REGISTER_SUCCESS = '@@register/REGISTER_SUCCESS',
    REGISTER_ERROR = '@@register/REGISTER_ERROR',
  }
  
  // Declare state types with `readonly` modifier to get compile time immutability.
  // https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
  export interface RegisterState {
    readonly loading: boolean
    readonly data: UserRegister
    readonly errors?: string
  }
  