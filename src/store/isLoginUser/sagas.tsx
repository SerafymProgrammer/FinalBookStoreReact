import { all, call, fork, put, takeEvery, take } from 'redux-saga/effects'
import { logUserActionTypes } from './types'
import { isLogUserChange, isLogoutUser } from './actions'
import { callApi } from '../../utils/api'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3000'

function* handlelog() {
 
  if(localStorage.getItem('user')){
    localStorage.setItem('currentUserLog',JSON.stringify ({
      currentUserLogIn:true
    }))
    yield put(isLogUserChange())
  }
  else {
  
    yield put(isLogoutUser())
  }
  
}
function* watchFetchRequest() {

  yield takeEvery (logUserActionTypes.is_log_user as any,  handlelog)
}

function* isLoggedSaga() {
  yield all([fork(watchFetchRequest)])
}

export default isLoggedSaga