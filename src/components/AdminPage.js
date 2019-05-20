import React from 'react';
import { Link } from 'react-router-dom';
import strings from '../resources/strings';

export const AdminPage = (props) => (
  <div className="page-body content-container">
  	<h1>{strings.site.manage}</h1>
  	<h2>{strings.site.vehicles}</h2>
    <Link to="/admin/vehiculos/create">
      <h2>{strings.site.vehicle.addVehicles}</h2>
    </Link>
    <Link to="/admin/vehiculos/edit">
      <h2>{strings.site.vehicle.editVehicles}</h2>
    </Link>
	<h2>{strings.site.articles}</h2>
	<Link to="/admin/articulos/create">
      <h2>{strings.site.article.addArticle}</h2>
    </Link>
    <Link to="/admin/articulos/edit">
      <h2>{strings.site.article.addArticle}</h2>
    </Link>
  </div>

);

export default AdminPage;