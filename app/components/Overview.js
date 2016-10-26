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
				<p>SIMS is an inventory management system for your secured storage systems. With the app, you can keep track of:</p>
				<ul>
					<li>Firearms</li>
					<li>Ammunition</li>
					<li>Important documents</li>
				</ul>
				<div className="row">
					<div className="col-md-4 col-sm-12">
						<h2>Firearms</h2>
					</div>
					<div className="col-md-4 col-sm-12">
						<h2>Ammunition</h2>
					</div>
					<div className="col-md-4 col-sm-12">
						<h2>Documents</h2>
					</div>
				</div>
			</div>
		)
	}
}

export default OverviewComponent