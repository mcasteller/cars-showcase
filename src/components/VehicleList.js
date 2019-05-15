import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import VehicleListItem from './VehicleListItem';
import selectVehicles from '../selectors/vehicles';
import strings from '../resources/strings';

// This component is used on both vehicle list view and vehicle list
// edit mode
export const VehicleList = (props) => (
  <div className="content-container">
    <div className="list-body">
      {
        props.vehicles.length === 0 ? (
          <div className="list-item list-item--message">
            <span>{strings.site.noVehicles}</span>
          </div>
        ) : (
            props.vehicles.map((vehicle) => (
                <Link key={vehicle.id} to={props.match ? `${props.match.url}/${vehicle.id}` : `vehiculos/${vehicle.id}`}>
                  <VehicleListItem {...vehicle} />;
                </Link>
            ))
        )
      }
    </div>
  </div>

);

// Maps store state into component props
const mapStateToProps = (state) => {
  return {
    vehicles: selectVehicles(state.vehicles, state.filters)
    //vehicles: state.vehicles
  };
};

export default connect(mapStateToProps)(VehicleList);