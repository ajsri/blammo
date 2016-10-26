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