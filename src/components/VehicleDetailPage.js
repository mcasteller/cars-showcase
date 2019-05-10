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
			description: props.vehicle ? props.vehicle.description : '',
	      	createdAt: props.vehicle ? moment(props.vehicle.createdAt) : moment(),
			filesURL: props.vehicle ? props.vehicle.filesURL : []
		}
	};

	render() {
		return (
		    <div>
		      <SimpleSlider 
		      	items={this.state.filesURL}
		      	/>
		      <h3 className="list-item__title">{this.state.description} Detalle Vehiculo</h3>
		      <span className="list-item__sub-title">{moment(this.state.createdAt).format('MMMM Do, YYYY')}</span>
		    </div>
		)	
	}
}

const mapStateToProps = (state, props) => ({
  vehicle: state.vehicles.find((vehicle) => vehicle.id === props.match.params.vehicleId)
});

export default connect(mapStateToProps, undefined)(VehicleDetailPage);