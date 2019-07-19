// This file holds our state type, as well as any other types related to this Redux store.

// Response object for GET /heroes
// https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes%2Fget


  

  // This type is basically shorthand for `{ [key: string]: any }`. Feel free to replace `any` with
  // the expected return type of your API response.
  export type ApiResponse = Record<string, any>
  

  export enum BasketActionTypes {

    BOOKS_COUNT_CHANGED = '@@count/BOOKS_COUNT_CHANGED',
    BOOKS_COUNT_INCREMENT = '@@count/BOOKS_COUNT_INCREMENT'
  }
  
  // Declare state types with `readonly` modifier to get compile time immutability.
  // https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
  export interface BasketState {
    count: number;
  }
  