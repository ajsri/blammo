import React, { Component } from 'react'

class WeaponsComponent extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		if(!this.props.weapons.list) {
			this.props.getAllFirearms()
		}
	}

	componentDidUpdate(nextProps){

	}




	render() {
		console.log(this)
		return (
			<div>
				<div className="row">
					<div className="col-md-12">
						<h1>Weapons</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<table className="table table-responsive">
							<thead>
								<tr>
									<th>Manufacturer</th>
									<th>Model</th>
									<th>Serial #</th>
									<th>Caliber</th>
								</tr>
							</thead>
							<tbody>
							{this.props.weapons.loadingAllFirearms &&
								<tr>
									<td colSpan="4" className="text-center">Loading, please wait</td>
								</tr>
							}
							{this.props.weapons.list && this.props.weapons.list.map((row, i) => {
								return(
									<tr key={i}>
										<td>{row.manufacturer}</td>
										<td>{row.name}</td>
										<td>{row.serial}</td>
										<td>{row.caliber}</td>
									</tr>
								)
							})}
							</tbody>
						</table>
					</div>
				</div>
			</div>

		)
	}
}

export default WeaponsComponent