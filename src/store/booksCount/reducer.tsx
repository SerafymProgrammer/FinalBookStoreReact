import { Reducer } from 'redux'
import { BasketState, BasketActionTypes } from './types'
import { number } from 'prop-types';

// Type-safe initialState!
export const initialState: BasketState = {
  count: 0
  
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
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

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as basketReducer }