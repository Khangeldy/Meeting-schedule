import React from 'react'
import './Calendar.css'
import classNames from 'classnames'
import { Button } from 'semantic-ui-react'
import { getFormatted } from '../utils'
import Immutable from 'immutable'

const Calendar = ({
  currentDay,
  selectedDate,
  days,
  prevMonth,
  nextMonth,
  clickCalendarDay,
  daysHaveSchedule }) => (
  <div className="calendar--wrapper">
    <Header selectedDate={selectedDate} prevMonth={prevMonth} nextMonth={nextMonth} />
    <DaysShortNames />
    <Dates
      selectedDate={selectedDate}
      currentDay={currentDay}
      days={days}
      daysHaveSchedule={daysHaveSchedule}
      clickCalendarDay={clickCalendarDay} />
  </div>
)

const Header = ({selectedDate, nextMonth, prevMonth}) => (
  <div style={{display: 'flex', justifyContent: 'center'}}>
    <Button icon='angle left' compact className="calendar__navs" onClick={prevMonth} />
    <div className="calendar__header">{getFormatted(selectedDate, 'MMM') + ' ' + getFormatted(selectedDate, 'YYYY')}</div>
    <Button icon='angle right' compact className="calendar__navs" onClick={nextMonth} />
  </div>
)

const DaysShortNames = () => (
  <div className="calendar__weeknames">
    <div>Mon</div>
    <div>Tue</div>
    <div>Wed</div>
    <div>Thu</div>
    <div>Fri</div>
    <div>Sat</div>
    <div>Sun</div>
  </div>
)

const Dates = ({currentDay, selectedDate, days, clickCalendarDay, daysHaveSchedule}) => (
  <div className="calendar__days">
    {
      days.map((day, i) => {
        // console.log(daysHaveSchedule)
        const outOfScope = getFormatted(day, 'MMM') !== getFormatted(selectedDate, 'MMM')
        const dayClassNames = classNames('calendar__day--circle',
          {
            currentDay: getFormatted(day) === getFormatted(currentDay),
            selectedDate: getFormatted(day) === getFormatted(selectedDate),
            haveSchedules: daysHaveSchedule.some((d) => d === getFormatted(day)),
            outOfMonth: outOfScope
          }
        )
        return (<div key={day} className="calendar__day">
          <div className={dayClassNames} onClick={() => outOfScope ? console.log('disabled'): clickCalendarDay(day) }>{getFormatted(day, 'D')}</div>
        </div>)
      })
    }
  </div>
)

Calendar.propTypes = {
  daysHaveSchedule: React.PropTypes.array.isRequired,
  currentDay: React.PropTypes.string.isRequired,
  selectedDate: React.PropTypes.string.isRequired,
  days: React.PropTypes.instanceOf(Immutable.List)
  // prevMonth: React.PropTypes.func.isReqired,
  // nextMonth: React.PropTypes.func.isReqired,
  // clickCalendarDay: React.PropTypes.func.isReqired
}
export default Calendar
