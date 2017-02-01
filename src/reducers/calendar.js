import moment from 'moment'
import Immutable from 'immutable'
import types from '../constants'

const currentDay = moment().toISOString();

function renderDays(selectedDate) {
  let days = Immutable.List();
  const startDay = moment(selectedDate).startOf('month').startOf('week');
  const endWeekDay = moment(selectedDate).endOf('month').endOf('week');
  const diff = endWeekDay.diff(startDay, 'days');

  for(let i = 0; i <= diff; i++) {
    days = days.push(startDay.clone().add(i, 'days').toISOString())
  }
  return days;
}

const days = renderDays(currentDay);
const initialState = Immutable.Map({currentDay: currentDay, days: days, selectedDate: currentDay })

const calendar = (state = initialState, action) => {
  switch(action.type) {
    case types.renderCalendar:
      const selectedDate = action.current;
      const days = renderDays(selectedDate);

      return state.set('days', days).set('selectedDate', selectedDate)

    case types.selectedDate:
      return state.set('selectedDate', action.stringDate);
    default:
      return state;
  }
}

export default calendar;
