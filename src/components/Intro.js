import React, { Component } from 'react'
import CalendarContainer from '../containers/CalendarContainer'
import ScheduleContainer from '../containers/ScheduleContainer'
import moment from 'moment'

class Intro extends Component {
  constructor(props) {
    super(props)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
    this.handleClickDate = this.handleClickDate.bind(this)
    this.showForm = this.showForm.bind(this)
    this.createSchedule = this.createSchedule.bind(this)
    this.onDeleteSchedule = this.onDeleteSchedule.bind(this)
    this.onEditSchedule = this.onEditSchedule.bind(this)
    this.updateSchedule = this.updateSchedule.bind(this)

  }
  componentWillMount() {
    this.props.renderCalendar(moment().toISOString());
  }

  prev() {
    this.props.renderCalendar(moment(this.props.selectedDate).subtract(1, 'month').toISOString())
  }
  next() {
    this.props.renderCalendar(moment(this.props.selectedDate).add(1, 'month').toISOString())
  }

  handleClickDate(isoDate) {
    this.props.changeSelectedDate(isoDate);
  }

  showForm(flag) {
    this.props.showForm(flag);
  }

  createSchedule(event, data) {
    event.preventDefault()
    this.props.newSchedule(data.formData, this.props.selectedDate)
    this.showForm(0);
  }

  onEditSchedule(event, date, id, text, participant) {
    // this.props.onStartUpdate({date, id, text, participant});
    this.props.autoFills(date, id, text, participant)
    this.showForm(1);
  }

  onDeleteSchedule(event, date, id) {
    this.props.deleteSchedule(date, id)
  }

  updateSchedule(event, data) {
    event.preventDefault();
    this.props.updateSchedule(this.props.selectedDate, data.formData)
    this.showForm(0)
  }

  validateField( fieldName, regExp) {
    this.props.validateField(fieldName, regExp)
  }

  fieldOnBlur(event, fieldName, regExp) {
    this.validateField(fieldName, regExp)
  }

  render() {
    return (
      <div className="content--right__content">
        <div className="crc__left">
          <CalendarContainer
            prevMonth={this.prev}
            nextMonth={this.next}
            clickCalendarDay={this.handleClickDate}
            />
        </div>
        <hr className="divider" />
        <div className="crc__right">
          <ScheduleContainer
            createSchedule={this.createSchedule}
            onEditSchedule={this.onEditSchedule}
            onDeleteSchedule={this.onDeleteSchedule}
            updateSchedule={this.updateSchedule}
            showForm={this.showForm}
           />
        </div>
      </div>
    )
  }
}

export default Intro
