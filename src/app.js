import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { startSetVehicles } from './actions/vehicles';

// Create Redux store
const store = configureStore();

// We use Provider tag as part of react-redux plugin to manage redux state
// It provides the store to every react element our application uses
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

store.dispatch(startSetVehicles()).then(() => {
  renderApp();
  if (history.location.pathname === '/') {
    history.push('/');
  }
});

// Detect auth state change, if authorized move to proper section
// If not move to homepage
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    history.push('/admin');
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
