import { combineReducers, Dispatch, Action, AnyAction } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { usersReducer } from './register/reducer';
import registerSaga from './register/sagas'
import { RegisterState } from './register/types';
import { BooksListState } from './booksList/types';
import { booksReducer } from './booksList/reducer';
import booksSaga from './booksList/sagas';
import { BasketState } from './booksCount/types';
import { basketReducer } from './booksCount/reducer';
import basketSaga from './booksCount/sagas';
import { isLogUserState } from './isLoginUser/types';
import { isLoggedReducer } from './isLoginUser/reducer';
import isLoggedSaga from './isLoginUser/sagas';
import { changeUserReducer } from './changeCurrentUser/reducer';
import changeUserSaga from './changeCurrentUser/sagas';
import { ChangeUserState } from './changeCurrentUser/types';

export interface ApplicationState {
  changeCurrentUser: ChangeUserState,
  isLoginUser: isLogUserState,
  booksCount: BasketState,
  booksList: BooksListState,
  register: RegisterState,
  router: RouterState
}


export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}


export const createRootReducer = (history: History) =>
  combineReducers({
    changeCurrentUser: changeUserReducer,
    isLoginUser: isLoggedReducer,
    booksCount: basketReducer,
    booksList: booksReducer,
    register: usersReducer,
    router: connectRouter(history)
  })


 export function* rootSaga() {
   yield all([fork(registerSaga), fork(booksSaga), fork(basketSaga),fork(isLoggedSaga), fork(changeUserSaga)]) }