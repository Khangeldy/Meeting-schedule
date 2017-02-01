import { connect } from 'react-redux';
import Intro from '../components/Intro'
import { renderCalendar, selectedDate } from '../actions/calendarRender'
import { showNewScheduleForm, newSchedule, deleteSchedule, updateSchedule, autoFillForm } from '../actions/scheduleActions'

function getDaysHaveSchedule(obj) {
  const result =  Object.keys(obj).filter((item, i) => {
    if(Object.getOwnPropertyNames(obj[item]).length !== 0) {
      return item;
    }
  })

  return result;
}

const mapStateToProps = (state) => ({
  selectedDate: state.calendar.get('selectedDate')
})


const mapDispatchToProps = (dispatch) => ({
  renderCalendar: (current) => {
    dispatch(renderCalendar(current))
  },
  changeSelectedDate: (string) => dispatch(selectedDate(string)),
  showForm: (flag) => dispatch(showNewScheduleForm(flag)),
  newSchedule: (data, date) => dispatch(newSchedule(data, date)),
  deleteSchedule: (date, id) => dispatch(deleteSchedule(date, id)),
  updateSchedule: (date, newData) => {
    console.log(date, newData)
    dispatch(updateSchedule(date, newData))},
  autoFills: (date, id, text, participant) => dispatch(autoFillForm({date, id, text, participant}))
})

const IntroContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro)

export default IntroContainer
