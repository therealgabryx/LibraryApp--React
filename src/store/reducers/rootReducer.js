import authReducer from './authReducer'
import booksSliderReducer from './booksSliderReducer'
import latestBooksReducer from './latestBooksReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    sliderBooks: booksSliderReducer,
    latestBooks: latestBooksReducer
}) 

export default rootReducer 