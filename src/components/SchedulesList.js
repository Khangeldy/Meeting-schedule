import React from 'react'
import { Button } from 'semantic-ui-react'

const SchedulesList = ({schedules, selectedDate, onEditSchedule, onDeleteSchedule}) => (
  <div>
    { schedules.valueSeq().map((schedule, i) => {
      return <div key={schedule.get('id')} className="item__schedule-edit">
        <div className="schedule-edit">
          <div className="schedule-edit__text" style={{maxWidth: '85%'}}>{schedule.get('desc').replace(/(?:\r\n|\r|\n)/g)}</div>
          <div className="schedule-edit__actions">
            <Button className="g-icon-button" onClick={(e) => onEditSchedule(e, selectedDate, schedule.get('id'), schedule.get('desc'), schedule.get('name'))} icon="pencil" />
            <Button className="g-icon-button" onClick={(e) => onDeleteSchedule(e, selectedDate, schedule.get('id'))} icon="trash" />
          </div>
        </div>
        <div className="schedule-edit__participant">{schedule.get('name')}</div>
      </div>
    })}
  </div>
)

export default SchedulesList
