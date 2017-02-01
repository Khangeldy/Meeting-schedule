import {createStore} from 'redux'
import reducers from '../reducers'

const initialState = {}

let configStore;

if (process.env.NODE_ENV === 'production') {
  configStore = () => {
    return createStore(reducers, initialState)
  }
} else {
  configStore = () => {
    return createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  }
}

export default configStore;
