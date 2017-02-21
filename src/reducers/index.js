import { combineReducers } from 'redux';

import targets from './targets_reducer'
import showEditForm from './edit_form_reducer'
import expandTarget from './expand_target_reducer'

const rootReducer = combineReducers({
  targets, showEditForm, expandTarget
});

export default rootReducer;
