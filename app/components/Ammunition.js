import React, { Component } from 'react'

class AmmunitionComponent extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		if(!this.props.ammunition.list){
			this.props.getAllAmmunition()
		}
	}

	componentDidUpdate(nextProps){

	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-12">
						<h1>Ammunition</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<table className="table table-responsive">
							<thead>
								<tr>
									<th>Manufacturer</th>
									<th>Caliber</th>
									<th>Count</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
							{this.props.ammunition.loadingAllAmmunition &&
							<tr>
								<td colSpan="4" className="text-center">Loading, please wait</td>
							</tr>
							}
							{this.props.ammunition.list && this.props.ammunition.list.map((row, i) => {
								return(
									<tr key={i}>
										<td>{row.name}</td>
										<td>{row.shortName}</td>
										<td>{row.quantity}</td>
										<td>${row.price}</td>
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

export default AmmunitionComponent