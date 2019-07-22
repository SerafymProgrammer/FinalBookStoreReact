import { Reducer } from 'redux'
import { isLogUserState, logUserActionTypes } from './types'
import { number } from 'prop-types';

export const initialState: isLogUserState = {
  isLogUser: false
  
}

const reducer: Reducer<isLogUserState> = (state = initialState, action) => {
  switch (action.type) {
    case logUserActionTypes.IS_LOG_USER_CHANGE: {
     
      state.isLogUser = true;
      return { ...state}
    }
    case logUserActionTypes.IS_LOGOUT_USER: {
     
      
      state.isLogUser = false;
      return { ...state}
    }
    default: {
      return state
    }
  }
}

export { reducer as isLoggedReducer }