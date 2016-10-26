import React, { Component } from 'react'

class AddItem extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return(
			<form>
				<div className="form-group">
					<label for="nickname">Username</label>
					<input type="text" className="form-control" id="nickname" placeholder="Enter a username"/>
				</div>
				<div className="form-group">
					<label for="password">Password</label>
					<input type="password" className="form-control" id="password" placeholder="Password" />
				</div>
			</form>
		)
	}
}

export default AddItem