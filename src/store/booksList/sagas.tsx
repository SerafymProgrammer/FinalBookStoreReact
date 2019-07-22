import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { BooksListActionTypes } from './types'
import { booksListError, booksListSuccess ,booksListRequest} from './actions'
import { callApi } from '../../utils/api'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3000'

function* handleFetch() {
  try {

    const res = yield call(callApi, 'get', API_ENDPOINT, '/books/')

    if (res.error) {
      yield put(booksListError(res.error))
    } else {
      yield put(booksListSuccess(res))
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