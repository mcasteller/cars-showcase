import React from 'react';
import { Link } from 'react-router-dom';
import strings from '../resources/strings';

export const AdminPage = (props) => (
  <div className="content-container">
    <Link to="/admin/create">
      <h2>{strings.site.vehicle.addVehicles}</h2>
    </Link>
    <Link to="/admin/edit">
      <h2>{strings.site.vehicle.editVehicles}</h2>
    </Link>
  </div>

);

export default AdminPage;