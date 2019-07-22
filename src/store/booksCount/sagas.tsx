import { all, call, fork, put, takeEvery, take } from 'redux-saga/effects'
import { BasketActionTypes } from './types'
import { bookCountIncrement } from './actions'
import { callApi } from '../../utils/api'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3000'

function* handleCount() {
 
  yield put(bookCountIncrement())

}

function* watchFetchRequest() {

  yield takeEvery (BasketActionTypes.BOOKS_COUNT_CHANGED as any,  handleCount)
}

function* basketSaga() {
  yield all([fork(watchFetchRequest)])
}

export default basketSaga