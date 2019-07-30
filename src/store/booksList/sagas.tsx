import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { BooksListActionTypes, Book } from './types'
import { booksListError, booksListSuccess ,booksListRequest} from './actions'
import { callApi } from '../../utils/api'
import { array } from 'prop-types';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3000'

function* handleFetch() {
  try {

    const res = yield call(callApi, 'get', API_ENDPOINT, '/books/')

    if (res.error) {
      yield put(booksListError(res.error))
    } else {
       
      let newBooksList: Book[] = [];

      res.map((data: any) => {
        let book: Book = data.Books;
        book.author = data.Authors.name;
        newBooksList.push(book);
      })

      yield put(booksListSuccess(newBooksList))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(booksListError(err.stack!))
    } else {
      yield put(booksListError('An unknown error occured.'))
    }
  }
}
function* watchFetchRequest() {
  yield takeEvery(BooksListActionTypes.BOOKS_LIST_REQUEST, handleFetch)
}

function* booksSaga() {
  yield all([fork(watchFetchRequest)])
}

export default booksSaga