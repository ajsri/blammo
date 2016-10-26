export const overview = (state = {}, action) => {
	switch(action.type) {
		case 'REQUEST_ALL_FIREARMS':
			return Object.assign({}, state, {
				loadingAllFirearms: true
			})
		case 'RECEIVE_ALL_FIREARMS':
			return Object.assign({}, state, {
				firearms: action.data,
				loadingAllFirearms: false
			})
		default:
			return state
	}
}

export default overview