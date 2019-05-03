import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage';
import VehicleList from '../components/VehicleCategory';
import VehiclesSummary from '../components/VehiclesSummary';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import VehicleCategory from '../components/VehicleCategory';
import VehicleDetail from '../components/VehicleDetail';

export const history = createHistory();

const AppRouter = () => {
  const categories = [
    {
      name: 'Livianos',
      id: 'livianos',
      description: 'Autos Livianos',
      img: ''
    },
    {
      name: 'Medianos',
      id: 'medianos',
      description: 'Autos Medianos',
      img: ''
    },
    {
      name: 'Pesados',
      id: 'pesados',
      description: 'Autos Pesados',
      img: ''
    }
  ];
 
  return (
    <Router history={history}>
      <div>
        <Switch>
          {/* <PublicRoute path="/" component={LoginPage} exact={true} /> */}
          {/* <PrivateRoute path="/dashboard" component={DashboardPage} /> */}
          {/* {categories.map(({ id }) => {
            return (
              <Switch>
                <PublicRoute key={`/${id}/:vehicleID`} path={`/${id}/:vehicleID`} component={VehicleDetail} />
                <PublicRoute key={id} path={`/${id}`} component={VehicleCategory}/>
              </Switch>  
            )
          })} */}
          <PublicRoute path="/:categoryId/:vehicleId" component={VehicleDetail}/>
          <PublicRoute path="/:cateroryId" component={VehicleCategory}/>
          <PublicRoute path="/" component={HomePage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}


export default AppRouter;
