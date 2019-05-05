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
import AddVehiclePage from '../components/AddVehiclePage';
import EditVehiclePage from '../components/EditVehiclePage';
import AdminPage from '../components/AdminPage';

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
          <PublicRoute path="/" component={HomePage} exact />
          <PublicRoute path="/login" component={LoginPage} />
          <PublicRoute path="/admin/edit/:vehicleId" component={EditVehiclePage}/>
          <PublicRoute path="/admin/edit" component={VehicleCategory}/>
          <PublicRoute path="/admin/create" component={AddVehiclePage}/>
          <PublicRoute path="/admin" component={AdminPage}/>
          <PublicRoute path="/:categoryId/:vehicleId" component={VehicleDetail}/>
          <PublicRoute path="/:cateroryId" component={VehicleCategory}/>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}


export default AppRouter;
