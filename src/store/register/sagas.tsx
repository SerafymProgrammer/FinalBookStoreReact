import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { RegisterActionTypes } from './types'
import { fetchError, fetchSuccess ,fetchRequest} from './actions'
import { callApi } from '../../utils/api'
import { createBrowserHistory } from 'history';
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3000'

function* handleFetch(data: any) {
  try {
    // To call async functions, use redux-saga's `call()`.
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

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(RegisterActionTypes.REGISTER_REQUEST, handleFetch)
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* registerSaga() {
  yield all([fork(watchFetchRequest)])
}

export default registerSaga