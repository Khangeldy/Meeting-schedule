import React from 'react'
import { Button } from 'semantic-ui-react'
import './Schedule.css'
import ScheduleForm from './ScheduleForm'
import SchedulesList from './SchedulesList'
import { getFormatted} from '../utils'


const ScheduleEditor = ({
  schedules,
  selectedDate,
  createNewOne,
  activeState,
  createSchedule,
  showForm,
  onEditSchedule,
  onDeleteSchedule,
  autoFill,
  updateSchedule
}) => {
  const ButtonStyle0 = {
    className: "g-yellow-button g-float-right",
    onClick: () => showForm(1),
    color: 'yellow',
    compact: true,
    children: 'Create'
  }
  const ButtonStyle1 = {
    className: "schedule__close g-float-right",
    onClick: () => showForm(0),
    circular: true,
    icon: 'close'
  }
  const ButtonStyle = activeState === 0 ? ButtonStyle0 : ButtonStyle1

  let scheduleListContent = 'Nothing planned';

  if(activeState === 1) {
    scheduleListContent = <ScheduleForm
      createNewOne={createNewOne}
      autoFills={autoFill}
      updateSchedule={updateSchedule}
      createSchedule={createSchedule} />
  } else if(schedules.get(getFormatted(selectedDate)) && schedules.get(getFormatted(selectedDate)).size !== 0) {
    scheduleListContent = <SchedulesList
      onEditSchedule={onEditSchedule}
      onDeleteSchedule={onDeleteSchedule}
      schedules={schedules.get(getFormatted(selectedDate))}
      selectedDate={selectedDate} />
  }

  return(
    <section className="schedule-container">
      <header className="schedule__header">
        <h3 className="schedule__header-title">{activeState ? 'New meeting on ': ''}{getFormatted(selectedDate, 'MMMM DD')}</h3>
        <Button {...ButtonStyle}></Button>
      </header>
      <div className="schedule__list">
        { scheduleListContent }
      </div>
    </section>
  )
}

ScheduleEditor.propTypes = {
  selectedDate: React.PropTypes.string.isRequired,
  showForm: React.PropTypes.func.isRequired,
  activeState: React.PropTypes.number.isRequired,
  schedules: React.PropTypes.object.isRequired,
  autoFill: React.PropTypes.object
}

export default ScheduleEditor
