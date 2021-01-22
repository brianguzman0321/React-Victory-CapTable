import { combineReducers } from 'redux';
import commonReducer from './commonReducer';
import ownersReducer from './ownersReducer';

const reducers = combineReducers({
  common: commonReducer,
  owners: ownersReducer,
});

export default reducers;
