import React from 'react';
import { connect } from 'react-redux';
import VehicleForm from './VehicleForm';
import { startEditVehicle, startRemoveVehicle } from '../actions/vehicles';
import strings from '../resources/strings';

export class EditVehiclePage extends React.Component {
  onSubmit = (vehicle) => {
    this.props.startEditVehicle(this.props.vehicle.id, vehicle);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveVehicle({ id: this.props.vehicle.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">{strings.site.vehicle.editVehicle}</h1>
          </div>
        </div>
        <div className="content-container">
          <VehicleForm
            vehicle={this.props.vehicle}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>{strings.site.vehicle.removeVehicle}</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  vehicle: state.vehicles.find((vehicle) => vehicle.id === props.match.params.vehicleId)
});

const mapDispatchToProps = (dispatch) => ({
  startEditVehicle: (id, vehicle) => dispatch(startEditVehicle(id, vehicle)),
  startRemoveVehicle: (data) => dispatch(startRemoveVehicle(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditVehiclePage);