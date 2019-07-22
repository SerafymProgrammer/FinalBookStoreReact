import { all, call, fork, put, takeEvery, take } from 'redux-saga/effects'
import { logUserActionTypes } from './types'
import { isLogUserChange, isLogoutUser } from './actions'
import { callApi } from '../../utils/api'

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

  yield takeEvery (logUserActionTypes.IS_LOG_USER as any,  handlelog)
}

function* isLoggedSaga() {
  yield all([fork(watchFetchRequest)])
}

export default isLoggedSaga