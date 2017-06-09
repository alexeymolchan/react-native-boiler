import { combineReducers } from 'redux';
import appReducer from '../components/app/reducer.js';


const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;