export const ammunition = (state = {}, action) => {
	switch(action.type) {
		case 'REQUEST_ALL_AMMUNITION':
			return Object.assign({}, state, {
				loadingAllAmmunition: true
			})
		case 'RECEIVE_ALL_AMMUNITION':
			return Object.assign({}, state, {
				list: action.data,
				loadingAllAmmunition: false
			});
		default:
			return state
	}
}

export default ammunition