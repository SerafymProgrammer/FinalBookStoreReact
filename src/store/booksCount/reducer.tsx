import { Reducer } from 'redux'
import { BasketState, BasketActionTypes } from './types'
import { number } from 'prop-types';


export const initialState: BasketState = {
  count: 0
  
}

const reducer: Reducer<BasketState> = (state = initialState, action) => {
  switch (action.type) {
    case BasketActionTypes.BOOKS_COUNT_INCREMENT: {
      state.count ++;
      return { ...state}
    }
    default: {
      return state
    }
  }
}

export { reducer as basketReducer }