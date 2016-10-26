import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { overview } from './overview'

const main = (state = {}, action) => {
	return state
}

const mainReducer = combineReducers({
	main,
	overview,
	routing: routerReducer
})

export default mainReducer