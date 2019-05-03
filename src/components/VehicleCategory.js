import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import VehicleCategoryItem from './VehicleCategoryItem';
import PublicRoute from '../routers/PublicRoute';
import VehicleDetail from './VehicleDetail'; 

//import selectVehicles from '../selectors/vehicles';

export const VehicleCategory = ({match}) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Vehiculos</div>
      <div className="show-for-desktop">Vehiculos</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <Link to={`${match.url}/25`}>
      <VehicleCategoryItem key={12} description='hola che' />;
    </Link>


    {/* <div className="list-body">
      {
        props.vehicles.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No hay vehiculos</span>
            <VehicleListItem key={12} description='hola' />;
          </div>
        ) : (
            props.vehicles.map((vehicles) => {
              return <VehicleListItem key={vehicle.id} {...vehicle} />;
            })
          )
      }
    </div> */}
    {console.log(match.url)}

    {/* <PublicRoute path={`${match.path}/:vehicleId`} component={VehicleDetail} /> */}
  </div>

);

// const mapStateToProps = (state) => {
//   return {
//     //vehicles: selectVehicles(state.vehicles, state.filters)
//     vehicles: []
//   };
// };

// export default connect(mapStateToProps)(VehicleCategory);
export default VehicleCategory; 