import axios from 'axios'

export const getAllFirearms = () => {
	return dispatch => {
		dispatch({
			type: "REQUEST_ALL_FIREARMS"
		})
		axios.get('/safe/guns')
			.then(response => {
				dispatch({
					type: "RECEIVE_ALL_FIREARMS",
					data: response.data
				})
			})
			.catch(error => {
				dispatch({
					type: "REQUEST_ALL_FIREARMS_ERROR",
					error: error.data
				})
			})
	}
}

export const getAllAmmunition = () => {
	return dispatch => {
		dispatch({
			type: "REQUEST_ALL_AMMUNITION"
		})
		axios.get('/safe/ammo')
			.then(response => {
				dispatch({
					type: "RECEIVE_ALL_AMMUNITION",
					data: response.data
				})
			})
			.catch(error => {
				dispatch({
					type: "REQUEST_ALL_AMMUNITION_ERROR",
					error: error.data
				})
			})
	}
}