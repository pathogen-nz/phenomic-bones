import { combineReducers } from "redux"
import thunk from 'redux-thunk';
import createStore from "phenomic/lib/redux/createStore"
// eslint-disable-next-line import/no-namespace
import * as phenomicReducers from "phenomic/lib/redux/modules"

import * as reducers from './redux';

const middlewares = [thunk];

const store = createStore(
  combineReducers({
    ...phenomicReducers,
    ...reducers,
  }),
  { ...(typeof window !== "undefined") && window.__INITIAL_STATE__ },
  middlewares,
)

export default store
