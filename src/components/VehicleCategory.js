import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import VehicleCategoryItem from './VehicleCategoryItem';
//import selectVehicles from '../selectors/vehicles';

export const VehicleCategory = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Vehiculos</div>
      <div className="show-for-desktop">Vehiculos</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    {/* <Link to={`${match.url}/25`}>
      <VehicleCategoryItem key={12} description='hola che' />;
    </Link> */}


    <div className="list-body">
      {
        props.vehicles.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No hay vehiculos</span>
          </div>
        ) : (
            props.vehicles.map((vehicle) => (
                <Link key={vehicle.id} to={`${props.match.url}/${vehicle.id}`}>
                  <VehicleCategoryItem {...vehicle} />;
                </Link>
            ))
            // {
            //   return <VehicleCategoryItem key={vehicle.id} {...vehicle} />;
            // })
          )
      }
    </div>
  </div>

);

// Maps store state into component props
const mapStateToProps = (state) => {
  return {
    // vehicles: selectVehicles(state.vehicles, state.filters)
    vehicles: state.vehicles
  };
};

export default connect(mapStateToProps)(VehicleCategory);