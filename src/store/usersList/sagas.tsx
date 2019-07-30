import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { UsersListActionTypes } from './types'
import { usersListError, usersListSuccess ,usersListRequest} from './actions'
import { callApi } from '../../utils/api'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3000'

function* handleFetch() {
  try {

    const res = yield call(callApi, 'get', API_ENDPOINT, '/users/')

    if (res.error) {
      yield put((res.error))
    } else {
      yield put(usersListSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(usersListError(err.stack!))
    } else {
      yield put(usersListError('An unknown error occured.'))
    }
  }
}
function* watchFetchRequest() {
  yield takeEvery(UsersListActionTypes.USERS_LIST_REQUEST, handleFetch)
}

function* usersSaga() {
  yield all([fork(watchFetchRequest)])
}

export default usersSaga