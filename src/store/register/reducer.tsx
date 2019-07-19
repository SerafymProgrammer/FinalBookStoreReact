import { Reducer } from 'redux'
import { RegisterState, RegisterActionTypes } from './types'

// Type-safe initialState!
export const initialState: RegisterState = {
  data: {email: '', passsword: ''},
  errors: undefined,
  loading: false
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<RegisterState> = (state = initialState, action) => {
  switch (action.type) {
    case RegisterActionTypes.REGISTER_REQUEST: {
      return { ...state, loading: true }
    }
    case RegisterActionTypes.REGISTER_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case RegisterActionTypes.REGISTER_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as usersReducer }