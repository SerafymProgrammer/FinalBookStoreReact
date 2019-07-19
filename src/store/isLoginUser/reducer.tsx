import { Reducer } from 'redux'
import { isLogUserState, logUserActionTypes } from './types'
import { number } from 'prop-types';

export const initialState: isLogUserState = {
  isLogUser: false
  
}

const reducer: Reducer<isLogUserState> = (state = initialState, action) => {
  switch (action.type) {
    case logUserActionTypes.is_log_userChange: {
     
      state.isLogUser = true;
      return { ...state}
    }
    case logUserActionTypes.is_logout_user: {
     
      
      state.isLogUser = false;
      return { ...state}
    }
    default: {
      return state
    }
  }
}

export { reducer as isLoggedReducer }