import React from 'react';
import { Link } from 'react-router-dom';

export const AdminPage = (props) => (
  <div className="content-container">
    <Link to="/admin/create">
      <h2>Agregar Vehiculos</h2>
    </Link>
    <Link to="/admin/edit">
      <h2>Editar Vehiculos</h2>
    </Link>
  </div>

);

export default AdminPage;