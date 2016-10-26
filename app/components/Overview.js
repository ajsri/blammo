import React, { Component } from 'react'

class OverviewComponent extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.props.getAllFirearms()
	}
	render() {
		return (
			<div>
				<h1>Overview</h1>
			</div>
		)
	}
}

export default OverviewComponent