import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { missions } from './missions/Missions';
import rockets  from './rockets/Rockets';

const reducer = combineReducers({
  missions,rockets
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
)

export default store