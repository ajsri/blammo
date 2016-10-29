import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { overview } from './overview'
import { weapons } from './weapons'
import { ammunition } from './ammunition'

const main = (state = {}, action) => {
	return state
}

const mainReducer = combineReducers({
	main,
	weapons,
	overview,
	ammunition,
	routing: routerReducer
})

export default mainReducer