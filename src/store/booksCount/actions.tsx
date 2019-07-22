import { action } from 'typesafe-actions'
import { BasketActionTypes} from './types'


export const bookCountChanged = () => action(BasketActionTypes.BOOKS_COUNT_CHANGED)
export const bookCountIncrement = () => action(BasketActionTypes.BOOKS_COUNT_INCREMENT)


