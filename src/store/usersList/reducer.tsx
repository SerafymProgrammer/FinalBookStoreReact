import { Reducer } from 'redux'
import { UsersListState, UsersListActionTypes } from './types'

export const initialState: UsersListState = {
  users:[],
  errors: undefined,
  loading: false
}

const reducer: Reducer<UsersListState> = (state = initialState, action) => {
  switch (action.type) {
    case UsersListActionTypes.USERS_LIST_REQUEST: {
      return { ...state, loading: true }
    }
    case UsersListActionTypes.USERS_LIST_SUCCESS: {
      return { ...state, loading: false, users: action.payload }
    }
    case UsersListActionTypes.USERS_LIST_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as usersReducer }