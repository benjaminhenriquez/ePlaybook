import { combineReducers } from 'redux';

import targets from './targets_reducer'

const rootReducer = combineReducers({
  targets
});

export default rootReducer;
