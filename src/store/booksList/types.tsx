
export interface Book {
  id: number;
  img: string;
  name: string;
  author: string;
  price: string;
  description: string;
}

  export enum BooksListActionTypes {
    BOOKS_LIST_REQUEST = '@@register/BooksList_REQUEST',
    BOOKS_LIST_SUCCESS = '@@register/BooksList_SUCCESS',
    BOOKS_LIST_ERROR = '@@register/BooksList_ERROR'

  }
  

  export interface BooksListState {
    loading: boolean
    data: Book[]
    errors?: string
  }
  