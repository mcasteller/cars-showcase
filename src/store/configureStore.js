import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import vehiclesReducer from '../reducers/vehicles';
import filtersReducer from '../reducers/filters';
import articlesReducer from '../reducers/articles';
import usersReducer from '../reducers/users';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Reducers are PURE functions
export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      filters: filtersReducer,	
      vehicles: vehiclesReducer,
      articles: articlesReducer,
      users: usersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
