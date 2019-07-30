
export interface Book {
  id: number;
  img: string;
  name: string;
  author?: string;
  price: string;
  description: string;
  books?:{}
}

  export enum BooksListActionTypes {
    BOOKS_LIST_REQUEST = '@@booksList/BOOKS_LIST_REQUEST',
    BOOKS_LIST_SUCCESS = '@@booksList/BOOKS_LIST_SUCCESS',
    BOOKS_LIST_ERROR = '@@booksList/BOOKS_LIST_ERROR'

  }
  

  export interface BooksListState {
    loading: boolean
    data: Book[]
    errors?: string
  }
  