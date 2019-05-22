import React from 'react';
import { connect } from 'react-redux';
import VehicleForm from './VehicleForm';
import { startAddVehicle } from '../actions/vehicles';
import strings from '../resources/strings';

class AddVehiclePage extends React.Component {
  onSubmit = (vehicle) => {
    this.props.startAddVehicle(vehicle);
    this.props.history.push('/admin');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">{strings.site.vehicle.addVehicle}</h1>
          </div>
        </div>
        <div className="content-container">
          <VehicleForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

// Make dispatch functions to be available on props 
const mapDispatchToProps = (dispatch) => ({
  startAddVehicle: (vehicle) => dispatch(startAddVehicle(vehicle))
});

// Call higher order component with our component as function call parameter
// Also pass two params to connect component
export default connect(undefined, mapDispatchToProps)(AddVehiclePage);
