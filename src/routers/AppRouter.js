import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage';
import VehiclesSummary from '../components/VehiclesSummary';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import VehicleList from '../components/VehicleList';
import VehicleDetailPage from '../components/VehicleDetailPage';
import AddVehiclePage from '../components/AddVehiclePage';
import EditVehiclePage from '../components/EditVehiclePage';
import AdminPage from '../components/AdminPage';
import ContactUsPage from '../components/ContactUsPage';

export const history = createHistory();

const AppRouter = () => {
 
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={HomePage} exact />
          <PublicRoute path="/login" component={LoginPage} />
          <PublicRoute path="/contacto" component={ContactUsPage} />
          <PublicRoute path="/admin/vehiculos/edit/:vehicleId" component={EditVehiclePage}/>
          <PublicRoute path="/admin/vehiculos/edit" component={VehicleList}/>
          <PublicRoute path="/admin/vehiculos/create" component={AddVehiclePage}/>
          <PublicRoute path="/admin/vehiculos/:vehicleId" component={VehicleDetailPage}/>
          <PublicRoute path="/admin" component={AdminPage}/>
          <PublicRoute path="/vehiculos/:vehicleId" component={VehicleDetailPage}/>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}


export default AppRouter;
