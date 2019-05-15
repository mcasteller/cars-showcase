import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { Media } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

import strings from '../resources/strings';

export class VehicleListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      brand: props.brand ? props.brand : '', 
      trim: props.trim ? props.trim : '', 
      amount: props.amount ? (props.amount / 100).toString() : '',
      year: props.year ? (props.year).toString() : '',
      engine: props.engine ? props.engine : '', 
      kilometers: props.kilometers ? (props.kilometers).toString() : '',
      color: props.color ? props.color : '', 
      description: props.description ? props.description : '',
      shortDescription: props.shortDescription ? props.shortDescription : '',
      calendarFocused: false,
      filesURL: props.filesURL ? props.filesURL : '',
      error: ''
    };

  }

	render() {
		return (
			<Media>
			  <img
			    className="mr-3"
			    src={this.state.filesURL[0]}
			    alt="Generic placeholder"
			  />
			  <Media.Body>
			    <h3><span>{strings.site.vehicle.brand}: </span>{this.state.brand}</h3>
		   	    <h3><span>{strings.site.vehicle.trim}: </span>{this.state.trim}</h3>
			    <h3><span>{strings.site.vehicle.year}: </span>{this.state.year}</h3>
			   	<h3><span>{strings.site.vehicle.engine}: </span>{this.state.engine}</h3>
			    <h3><span>{strings.site.vehicle.kilometers}: </span>{this.state.kilometers}</h3>
		   	    <h3><span>{strings.site.vehicle.color}: </span>{this.state.color}</h3>
			    {/*ReactHtmlParser(this.state.shortDescription)*/}
			  </Media.Body>
			</Media>
		);
	}
} 

export default VehicleListItem;
