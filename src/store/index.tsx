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

// import { LayoutState, layoutReducer } from './layout'

// import heroesSaga from './heroes/sagas'
// import { heroesReducer } from './heroes/reducer'
// import { HeroesState } from './heroes/types'
// import teamsSaga from './teams/sagas'
// import { TeamsState } from './teams/types'
// import { teamsReducer } from './teams/reducer'

// The top-level state object
export interface ApplicationState {
  changeCurrentUser: ChangeUserState,
  isLoginUser: isLogUserState,
  booksCount: BasketState,
  booksList: BooksListState,
  register: RegisterState,
  router: RouterState
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = (history: History) =>
  combineReducers({
    changeCurrentUser: changeUserReducer,
    isLoginUser: isLoggedReducer,
    booksCount: basketReducer,
    booksList: booksReducer,
    register: usersReducer,
    router: connectRouter(history)
  })

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 export function* rootSaga() {
   yield all([fork(registerSaga), fork(booksSaga), fork(basketSaga),fork(isLoggedSaga), fork(changeUserSaga)]) }