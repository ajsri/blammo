import React, { Component } from 'react'

class Navigation extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div className="col-md-2 left-navigation">
				<ul>
					<li>Overview</li>
					<li>Ammo</li>
					<li>Documents</li>
					<li>Firearms</li>
					<li>Other</li>
					<li>Account</li>
				</ul>
			</div>
		)
	}
}

export default Navigation