import { combineReducers } from 'redux'

import calendar from './calendar'
import schedule from './schedule'

const reducers = combineReducers({
  calendar,
  schedule
})

export default reducers;
