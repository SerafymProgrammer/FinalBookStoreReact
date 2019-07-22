import { Reducer } from 'redux'
import { BooksListState, BooksListActionTypes } from './types'

export const initialState: BooksListState = {
  data:[],
  errors: undefined,
  loading: false
}

const reducer: Reducer<BooksListState> = (state = initialState, action) => {
  switch (action.type) {
    case BooksListActionTypes.BooksList_REQUEST: {
      return { ...state, loading: true }
    }
    case BooksListActionTypes.BooksList_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case BooksListActionTypes.BooksList_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as booksReducer }