import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import vehiclesReducer from '../reducers/vehicles';
import filtersReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Reducers are PURE functions
export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      filters: filtersReducer,	
      vehicles: vehiclesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
