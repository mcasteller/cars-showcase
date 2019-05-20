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
import ArticleList from '../components/ArticleList';
import AddArticlePage from '../components/AddArticlePage';
import EditArticlePage from '../components/EditArticlePage';
import ArticleDetailPage from '../components/ArticleDetailPage';

export const history = createHistory();

const AppRouter = () => {
 
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
          <PublicRoute path="/contacto" component={ContactUsPage} />
          <PublicRoute path="/vehiculos/:vehicleId" component={VehicleDetailPage}/>
          <PublicRoute path="/admin/vehiculos/edit/:vehicleId" component={EditVehiclePage}/>
          <PublicRoute path="/admin/vehiculos/edit" component={VehicleList}/>
          <PublicRoute path="/admin/vehiculos/create" component={AddVehiclePage}/>
          <PublicRoute path="/articulos/:articleId" component={ArticleDetailPage}/>
          <PublicRoute path="/articulos" component={ArticleList} />          
          <PublicRoute path="/admin/articulos/edit/:articleId" component={EditArticlePage}/>
          <PublicRoute path="/admin/articulos/edit" component={ArticleList}/>
          <PublicRoute path="/admin/articulos/create" component={AddArticlePage}/>
          <PublicRoute path="/admin" component={AdminPage}/>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}


export default AppRouter;
