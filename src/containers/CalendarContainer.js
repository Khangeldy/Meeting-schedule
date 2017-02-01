import { connect } from 'react-redux';
import Calendar from '../components/Calendar'
import { renderCalendar, selectedDate } from '../actions/calendarRender'

function getDaysHaveSchedule(obj) {
  const [...mapKeys] = obj.keys();
  const result = mapKeys.filter((item, i) => {
    if(obj.get(item).size !== 0) {
      return item;
    }
  })

  return result;
}

const mapStateToProps = (state, ownProps) => ({
  days: state.calendar.get('days'),
  currentDay: state.calendar.get('currentDay'),
  selectedDate: state.calendar.get('selectedDate'),
  daysHaveSchedule: getDaysHaveSchedule(state.schedule.get('schedules'))
})


const mapDispatchToProps = (dispatch, ownProps) => ({
  renderCalendar: (current) => {
    dispatch(renderCalendar(current))
  },
  changeSelectedDate: (string) => dispatch(selectedDate(string)),
  prevMonth: ownProps.prevMonth,
  nextMonth: ownProps.nextMonth,
  clickCalendarDay: ownProps.clickCalendarDay
})

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)

export default CalendarContainer
