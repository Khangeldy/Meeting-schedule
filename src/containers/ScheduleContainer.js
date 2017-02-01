import { connect } from 'react-redux';
import ScheduleEditor from '../components/ScheduleEditor'
// import { showNewScheduleForm, newSchedule, deleteSchedule, updateSchedule, validateField } from '../actions/scheduleActions'

const mapStateToProps = (state, ownProps) => ({
  selectedDate: state.calendar.get('selectedDate'),
  activeState: state.schedule.get('showForm'),
  schedules: state.schedule.get('schedules'),
  autoFill: state.schedule.get('autoFill'),
  showForm: ownProps.showForm
})


const mapDispatchToProps = (dispatch, ownProps) => ({
  createSchedule: ownProps.createSchedule,
  onEditSchedule: ownProps.onEditSchedule,
  onDeleteSchedule: ownProps.onDeleteSchedule,
  forAutoFill: ownProps.forAutoFill,
  updateSchedule: ownProps.updateSchedule
})

const ScheduleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleEditor)

export default ScheduleContainer
