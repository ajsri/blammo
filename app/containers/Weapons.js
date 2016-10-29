import { connect } from 'react-redux'
import WeaponsComponent from '../components/Weapons'

import { getAllFirearms } from '../actions/index'


const mapDispatchToProps = (dispatch) => {
	return {
		getAllFirearms: () => {
			dispatch(getAllFirearms())
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		weapons: state.weapons
	}
}

const Weapons = connect(mapStateToProps, mapDispatchToProps)(WeaponsComponent)

export default Weapons