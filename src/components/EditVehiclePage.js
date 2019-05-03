import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditVehiclePage extends React.Component {
  onSubmit = (expense) => {
    // this.props.startEditExpense(this.props.expense.id, expense);
    // this.props.history.push('/');
  };
  onRemove = () => {
    // this.props.startRemoveExpense({ id: this.props.expense.id });
    // this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Editar Vehiculo</h1>
          </div>
        </div>
        <div className="content-container">
          <VehicleForm
            vehicle={this.props.vehicle}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Eliminar Vehiculo</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  vehicle: state.vehicles.find((vehicle) => vehicle.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditVehicle: (id, vehicle) => dispatch(startEditVehicle(id, vehicle)),
  startRemoveVehicle: (data) => dispatch(startRemoveVehicle(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditVehiclePage);
