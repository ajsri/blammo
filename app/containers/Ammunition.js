import { connect } from 'react-redux'
import AmmunitionComponent from '../components/Ammunition'

import { getAllAmmunition } from '../actions/index'


const mapDispatchToProps = (dispatch) => {
	return {
		getAllAmmunition: () => {
			dispatch(getAllAmmunition())
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		ammunition: state.ammunition
	}
}

const Ammunition = connect(mapStateToProps, mapDispatchToProps)(AmmunitionComponent)

export default Ammunition