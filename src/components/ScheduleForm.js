import React from 'react'
import { Button, TextArea, Form } from 'semantic-ui-react'

const FormExampleForm = ({createSchedule, autoFills = null, createNewOne, updateSchedule}) => {
  if(autoFills) {
    var hiddenInput = <input type="hidden" name="id" value={autoFills.get('id')} />
  }
  console.log(autoFills)

  return (
    <Form onSubmit={autoFills ? updateSchedule : createSchedule}>
      <Form.Field width="eight">
        <label>Participant</label>
        <input placeholder='Name' name="participant" defaultValue={autoFills && autoFills.get('participant')} autoComplete={false}/>
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <TextArea placeholder='Description meeting' defaultValue={autoFills && autoFills.get('text')} name="desc" rows="3" />
      </Form.Field>
      { hiddenInput}
      <div className="schedule-form-actions">
        <Button type='button' compact color="yellow" inverted onClick={() => createNewOne(0)} className="g-yellow-button">Cancel</Button>
        <Button type='submit' compact color="yellow" className="g-yellow-button">{autoFills ? 'Update': 'Save'}</Button>
      </div>
    </Form>
  )
}

export default FormExampleForm
