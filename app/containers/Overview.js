import { connect } from 'react-redux'
import OverviewComponent from '../components/Overview'
import { getAllFirearms } from '../actions/Overview'

const mapDispatchToProps = (dispatch) => {
	return {
		getAllFirearms: () => {
			dispatch(getAllFirearms())
		}
	}
};

const mapStateToProps = (state, ownProps) => {
	return {
		overview: state.overview
	}
};

const Overview = connect(mapStateToProps, mapDispatchToProps)(OverviewComponent);

export default Overview;