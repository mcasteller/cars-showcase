import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { connect } from 'react-redux';
import SimpleSlider from './SimpleSlider'; 

export class VehicleDetailPage extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      brand: props.vehicle ? props.vehicle.brand : '', 
	      trim: props.vehicle ? props.vehicle.trim : '', 
	      amount: props.vehicle ? (props.vehicle.amount / 100).toString() : '',
	      year: props.vehicle ? (props.vehicle.year).toString() : '',
	      engine: props.vehicle ? props.vehicle.engine : '', 
	      kilometers: props.vehicle ? (props.vehicle.kilometers).toString() : '',
	      color: props.vehicle ? props.vehicle.color : '', 
	      description: props.vehicle ? props.vehicle.description : '',
	      shortDescription: props.vehicle ? props.vehicle.shortDescription : '',
	      filesURL: props.vehicle ? props.vehicle.filesURL : '',
	      error: ''
	    };
	};

	render() {
		return (
		    <div>
		      <SimpleSlider 
		      	items={this.state.filesURL}
		      	/>
		      <h3 className="list-item__title">{this.state.brand}</h3>
   		      <h3 className="list-item__title">{this.state.trim}</h3>
		      <h3 className="list-item__title">{this.state.amount}</h3>
		      <h3 className="list-item__title">{this.state.year}</h3>
		      <h3 className="list-item__title">{this.state.engine}</h3>
		      <h3 className="list-item__title">{this.state.kilometers}</h3>
		      <h3 className="list-item__title">{this.state.color}</h3>
		      <p className="list-item__title">{this.state.description}</p>
		    </div>
		)	
	}
}

const mapStateToProps = (state, props) => ({
  vehicle: state.vehicles.find((vehicle) => vehicle.id === props.match.params.vehicleId)
});

export default connect(mapStateToProps, undefined)(VehicleDetailPage);