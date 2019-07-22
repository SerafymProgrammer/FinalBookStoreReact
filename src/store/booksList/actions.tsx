import { action } from 'typesafe-actions'
import { BooksListActionTypes, Book} from './types'

export const booksListRequest = () => action(BooksListActionTypes.BOOKS_LIST_REQUEST)

export const booksListSuccess = (data: Book[]) => action(BooksListActionTypes.BOOKS_LIST_SUCCESS, data)
export const booksListError = (message: string) => action(BooksListActionTypes.BOOKS_LIST_ERROR, message)


