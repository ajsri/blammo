import React, { Component } from 'react'
import Navigation from './Navigation'
import axios from 'axios'

class MainApp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: []
		}
	}

	componentDidMount() {
		console.log("8888");
		axios.get('/safe/contents')
			.then(response => {
				console.log(response)
				this.setState({items: response.data})
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		return (
			<div className="container-fluid fullHeight">
				<div className="row">
					<Navigation />
					<div className="col-md-10">
						<ul>
							{this.state.items.map((item, i) => {
								return(
									<li>{item.name} {item.shortName} ${item.price} {item.quantity}</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default MainApp