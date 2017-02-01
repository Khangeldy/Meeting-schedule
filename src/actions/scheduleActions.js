import types from '../constants'

export const showNewScheduleForm = (flag) => ({
  type: types.showNewScheduleForm,
  flag
})

export const newSchedule = (data, date) => ({
  type: types.createSchedule,
  participant: data.participant,
  desc: data.desc,
  date
})

export const deleteSchedule = (date, id) => ({
  type: types.deleteSchedule,
  date,
  id
})

export const updateSchedule = (date, newData) => ({
  type: types.updateSchedule,
  dateCurrent:date,
  dateOriginal: newData.date,
  id: newData.id,
  participant: newData.participant,
  desc: newData.desc
})

export const editSchedule = (oldDate) => ({
  type: types.editSchedule,
  payload: oldDate
})

export const validateField = (field, regExp) => ({
  type: types.validateParticipant,
  field,
  regExp
})

export const autoFillForm = (data) => ({
  type: types.autoFillForm,
  data
})
