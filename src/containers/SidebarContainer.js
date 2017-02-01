import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar'

const mapStateToProps = (state) => ({
  counter: state.schedule.get('schedulesCounter'),
})


const mapDispatchToProps = (dispatch) => ({

})

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer
