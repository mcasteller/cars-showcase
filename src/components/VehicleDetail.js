import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const VehicleDetail = ({ id, description, amount, createdAt }) => (
    <div>
      <h3 className="list-item__title">{description} Detalle Vehiculo</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
 
);

export default VehicleDetail;
