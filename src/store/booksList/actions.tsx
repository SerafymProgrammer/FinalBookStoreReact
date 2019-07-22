import { action } from 'typesafe-actions'
import { BooksListActionTypes, Book} from './types'

export const fetchRequest = () => action(BooksListActionTypes.BooksList_REQUEST)

export const fetchSuccess = (data: Book[]) => action(BooksListActionTypes.BooksList_SUCCESS, data)
export const fetchError = (message: string) => action(BooksListActionTypes.BooksList_ERROR, message)


