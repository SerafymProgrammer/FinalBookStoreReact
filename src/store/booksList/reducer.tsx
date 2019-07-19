import { Reducer } from 'redux'
import { BooksListState, BooksListActionTypes } from './types'

// Type-safe initialState!
export const initialState: BooksListState = {
  data:[],
  errors: undefined,
  loading: false
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
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

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as booksReducer }