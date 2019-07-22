
export interface Book extends ApiResponse {
  id: number;
  img: string;
  name: string;
  author: string;
  price: string;
  description: string;
}

  export type ApiResponse = Record<string, any>

  export enum BooksListActionTypes {
    BooksList_REQUEST = '@@register/BooksList_REQUEST',
    BooksList_SUCCESS = '@@register/BooksList_SUCCESS',
    BooksList_ERROR = '@@register/BooksList_ERROR'

  }
  

  export interface BooksListState {
    loading: boolean
    data: Book[]
    errors?: string
  }
  