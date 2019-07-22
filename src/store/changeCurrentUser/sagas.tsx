import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { ChangeUserActionTypes } from './types'
import { changeUserRequest, changeUserSuccess } from './actions'
import { callApi } from '../../utils/api'
import { createBrowserHistory } from 'history';
import User from '../register/types';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3000'

function* handleFetch(data: any) {
  try {
    delete data.payload.userToken;
    console.log(typeof data)
    const res = yield call(callApi, 'PUT', API_ENDPOINT, `/users/currUser/${data.payload.id}`, data.payload)
   
    yield put(changeUserSuccess(res.img))
    
  } catch (err) {
   
  }
}

function* watchFetchRequest() {
  yield takeEvery(ChangeUserActionTypes.CHANGE_USER_REQUEST, handleFetch)
}

function* changeUserSaga() {
  yield all([fork(watchFetchRequest)])
}

export default changeUserSaga