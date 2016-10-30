import React, { Component } from 'react'
import { Link } from 'react-router'

class Navigation extends Component {
	constructor(props){
		super(props)
		this.state = {
			visible: false
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="hidden-md-up col-md-2 left-navigation">
					<ul>
						<li onClick={(e) => this.setState({visible: !this.state.visible})}>S.I.M.S</li>
						{this.state.visible &&
							<div>
								<li><Link to="/ammo">Ammo</Link></li>
								<li>Documents</li>
								<li><Link to="/weapons">Firearms</Link></li>
								<li>Other</li>
								<li>Account</li>
							</div>
						}
					</ul>
				</div>
				<div className="hidden-sm-down col-md-2 left-navigation">
					<ul>
						<li>Overview</li>
						<li><Link to="/ammo">Ammo</Link></li>
						<li>Documents</li>
						<li><Link to="/weapons">Firearms</Link></li>
						<li>Other</li>
						<li>Account</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Navigation