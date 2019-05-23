import React from 'react';
import { Media } from 'react-bootstrap';
import strings from '../resources/strings';

export class VehicleListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      brand: props.brand ? props.brand : '', 
      trim: props.trim ? props.trim : '', 
      currency : props.currency ? props.currency : '',
      amount: props.amount ? (props.amount).toString() : '',
      files: props.files ? props.files : '',
      error: ''
    };

  }

	render() {
		return (
			<Media>
			  <img
			    className="mr-3"
			    src={this.state.files[0] ? this.state.files[0].url : ""}
			    alt="Generic placeholder"
			  />
			  <Media.Body>
			    <h3><span>{strings.site.vehicle.brand}: </span>{this.state.brand}</h3>
		   	    <h3><span>{strings.site.vehicle.trim}: </span>{this.state.trim}</h3>
			    <h3><span>{strings.site.vehicle.amount}: </span>{this.state.currency} {this.state.amount}</h3>
			  </Media.Body>
			</Media>
		);
	}
} 

export default VehicleListItem;
