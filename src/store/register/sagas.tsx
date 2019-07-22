import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { RegisterActionTypes } from './types'
import { registerError, registerSuccess ,registerRequest} from './actions'
import { callApi } from '../../utils/api'
import { createBrowserHistory } from 'history';
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3000'

function* handleFetch(data: ReturnType<typeof registerRequest>) {
  try {
    const res = yield call(callApi, 'POST', API_ENDPOINT, '/auth/register', data.payload)
    const history = createBrowserHistory();
    

    if (res.error) {
      yield put(registerError(res.error))
    } else {
      yield put(registerSuccess())
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(registerError(err.stack!))
    } else {
      yield put(registerError('An unknown error occured.'))
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