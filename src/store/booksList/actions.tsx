import { action } from 'typesafe-actions'
import { BooksListActionTypes, Book} from './types'

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions



export const fetchRequest = () => action(BooksListActionTypes.BooksList_REQUEST)



// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const fetchSuccess = (data: Book[]) => action(BooksListActionTypes.BooksList_SUCCESS, data)
export const fetchError = (message: string) => action(BooksListActionTypes.BooksList_ERROR, message)
// type them properly as well.


// export const fetchSuccess = (data: Hero[]) => action(HeroesActionTypes.FETCH_SUCCESS, data)
// export const fetchError = (message: string) => action(HeroesActionTypes.FETCH_ERROR, message)

