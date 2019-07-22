import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { RegisterActionTypes } from './types'
import { fetchError, fetchSuccess ,fetchRequest} from './actions'
import { callApi } from '../../utils/api'
import { createBrowserHistory } from 'history';
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3000'

function* handleFetch(data: any) {
  try {
    const res = yield call(callApi, 'POST', API_ENDPOINT, '/auth/register', data.payload)
    const history = createBrowserHistory();
    

    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess())
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
  yield takeEvery(RegisterActionTypes.REGISTER_REQUEST, handleFetch)
}

function* registerSaga() {
  yield all([fork(watchFetchRequest)])
}

export default registerSaga