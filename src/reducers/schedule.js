import types from '../constants'
import Immutable from 'immutable'
import { getFormatted } from '../utils'

const plainInitialObj = {
  schedules: {
    20170225: {
      1: {
        id: 1,
        name:"Khangeldy",
        desc:"Google main create gamer google installation main",
        dateUTC:"2017-01-30T10:45:16.808Z"
      }
    },
    20170130: {
      1: {
        id: 1,
        name:"Khangeldy",
        desc:"Google main create gamer google installation main",
        dateUTC:"2017-01-30T10:45:16.808Z"
      }
    },
    20170201: {
      1: {
        id: 1,
        name:"Daulet",
        desc:"Learn React js to my friend",
        dateUTC:"2017-01-30T10:45:16.808Z"
      },
      2: {
        id: 2,
        name:"Arman Gamer",
        desc:"Google make find your dream job",
        dateUTC:"2017-01-30T10:45:16.808Z"
      }
    }
  },
  showForm: 0,
  schedulesCounter: 4,
  autoCompleteNames: [
    'Arman Gamer',
    'Daulet'
  ]
}

const initialState = Immutable.fromJS(plainInitialObj);

const schedule = (state = initialState, action) => {
  switch(action.type) {
    case types.showNewScheduleForm: {
      return state.set('showForm', action.flag)
    }

    case types.createSchedule: {
      const meetings = state.get('schedules'),
          currentDate = getFormatted(action.date),
          inDay = meetings.get(currentDate, Immutable.Map()),
          autoCompleteNames = state.get('autoCompleteNames');

      const {...idKeys} = inDay.keys()
      const withNewItem = inDay.set(Math.max(idKeys, 0) + 1, Immutable.Map({
        name: action.participant,
        desc: action.desc,
        dateUTC: action.date,
        id: Math.max(idKeys, 0) + 1
      }));

      let withNewName;
      if(!autoCompleteNames.has(action.participant)) {
        withNewName = autoCompleteNames.push(action.participant)
      } else {
        withNewName = autoCompleteNames;
      }

      return state
        .set('schedules', withNewItem)
        .set('schedulesCounter', state.get('schedulesCounter') + 1)
        .set('autoCompleteNames', withNewName)
    }

    case types.deleteSchedule: {
      return state.deleteIn(['schedules', getFormatted(action.date), action.id])
        .set('schedulesCounter', state.get('schedulesCounter') - 1);
    }

    case types.updateSchedule: {
      const schList = state.get('schedules');
      const dateOriginal = state.getIn(['autoFill', 'date']);
      const updateId = state.getIn(['autoFill', 'id']);
      console.log('why it is 0: ' + updateId);
      const date1 = getFormatted(action.dateCurrent);
      const date2 = getFormatted(dateOriginal);
      if(date2 === date1) {
        return state.setIn(['schedules', date2, updateId], Immutable.Map({
          name: action.participant,
          desc: action.desc,
          dateUTC: action.dateUTC
        })).delete('autoFill')

      } else {
        const [...newAvialableIds] = state.getIn(['schedules', date1], Immutable.Map()).keys();
        console.log(newAvialableIds);
        const newId = Math.max(...newAvialableIds, 0) + 1;
        console.log(updateId, newId, date2);
        return state.deleteIn(['schedules', date2, updateId.toString()])
        .setIn(['schedules', date1, newId], Immutable.Map({
          name: action.participant,
          desc: action.desc,
          dateUTC: action.dateCurrent,
          id: newId
        })).delete('autoFill')

      }
    }

    case types.validateField: {
      if(action.regExp.test(action.field)) {
        return state.set('inValidFields', state.get('inValidFields').filter(field => {
          if(field !== action.field) {
            return true;
          }
        }))
      } else {
        return state.set('inValidFields', state.get('inValidFields').concat([action.field]))
      }
    }

    case types.autoFillForm: {
      return state.set('autoFill', Immutable.Map({...action.data}))
    }

    default: {
      return state
    }
  }
}

export default schedule
