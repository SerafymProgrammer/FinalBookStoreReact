import { Reducer } from 'redux'
import { ChangeUserState, ChangeUserActionTypes } from './types'

// Type-safe initialState!
export const initialState: ChangeUserState = {
  img: ''
}

const reducer: Reducer<ChangeUserState> = (state = initialState, action) => {
  switch (action.type) {
    case ChangeUserActionTypes.CHANGE_SUCCESS: {
      
      return { ...state, img: action.payload}
    }
    default: {
      return state
    }
  }
}

export { reducer as changeUserReducer }