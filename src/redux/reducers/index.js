import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import application from './application';

const rootReducer = combineReducers({
  application,
  form: formReducer,
});

export default rootReducer;
