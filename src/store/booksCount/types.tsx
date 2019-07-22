
  export type ApiResponse = Record<string, any>
  

  export enum BasketActionTypes {

    BOOKS_COUNT_CHANGED = '@@count/BOOKS_COUNT_CHANGED',
    BOOKS_COUNT_INCREMENT = '@@count/BOOKS_COUNT_INCREMENT'
  }

  export interface BasketState {
    count: number;
  }
  