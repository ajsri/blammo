import React, { Component } from 'react'

class Navigation extends Component {
	constructor(props){
		super(props)
		this.state = {
			visible: false
		}
	}

	componentDidMount() {
		window.addEventListener('resize', function() {
			console.log(this);
			console.log(window.outerWidth);
		})
	}

	render() {
		return (
			<div className="col-md-2 left-navigation">
				<ul>
					<li className="hidden-md-up">Overview</li>
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