import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { BooksListActionTypes } from './types'
import { fetchError, fetchSuccess ,fetchRequest} from './actions'
import { callApi } from '../../utils/api'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3000'

function* handleFetch() {
  try {

    const res = yield call(callApi, 'get', API_ENDPOINT, '/books/')

    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}
function* watchFetchRequest() {
  yield takeEvery(BooksListActionTypes.BooksList_REQUEST, handleFetch)
}

function* booksSaga() {
  yield all([fork(watchFetchRequest)])
}

export default booksSaga