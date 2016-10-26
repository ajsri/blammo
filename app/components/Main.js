import React, { Component } from 'react'
import Navigation from './Navigation'
import AddItem from './AddItem'

import axios from 'axios'

class MainApp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: []
		}
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="container-fluid fullHeight">
				<div className="row">
					<Navigation />
					<div className="col-md-10 offset-md-2">
						<h1>Overview</h1>
					</div>
				</div>
			</div>
		)
	}
}

export default MainApp