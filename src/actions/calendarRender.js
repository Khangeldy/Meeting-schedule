import types from '../constants'

export const renderCalendar = (current) => ({
  type: types.renderCalendar,
  current
});

export const selectedDate = (stringDate) => ({
  type: types.selectedDate,
  stringDate
});
