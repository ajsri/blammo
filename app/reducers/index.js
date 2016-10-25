import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const main = (state = {}, action) => {
	return state
}

const mainReducer = combineReducers({
	main,
	routing: routerReducer
})

export default mainReducer