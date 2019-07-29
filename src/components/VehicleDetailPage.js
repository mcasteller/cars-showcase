import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import SimpleSlider from './base/SimpleSlider'; 
import strings from '../resources/strings';

export class VehicleDetailPage extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      brand: props.vehicle ? props.vehicle.brand : '', 
	      trim: props.vehicle ? props.vehicle.trim : '', 
	      amount: props.vehicle ? (props.vehicle.amount).toString() : '',
	      currency: props.vehicle ? props.vehicle.currency : '',
	      ecommerceLink: props.vehicle ? props.vehicle.ecommerceLink : '',
	      year: props.vehicle ? (props.vehicle.year).toString() : '',
	      engine: props.vehicle ? props.vehicle.engine : '', 
	      kilometers: props.vehicle ? (props.vehicle.kilometers).toString() : '',
	      color: props.vehicle ? props.vehicle.color : '', 
	      description: props.vehicle ? props.vehicle.description : '',
	      shortDescription: props.vehicle ? props.vehicle.shortDescription : '',
	      files: props.vehicle ? props.vehicle.files : '',
	      error: ''
	    };
	};

	componentDidMount() {
	  window.scrollTo(0, 0)
	}
	
	render() {
		return (
		    <div className="content-container detail__page">
  	          <h1>{this.state.brand}</h1>
   	          <h2>{this.state.trim}</h2>
		      <SimpleSlider
		      	items={this.state.files || [] }
		      	/>
	          <h3><span>{strings.site.vehicle.brand}: </span>{this.state.brand}</h3>
	   	      <h3><span>{strings.site.vehicle.trim}: </span>{this.state.trim}</h3>
		      <h3><span>{strings.site.vehicle.amount}: </span>{this.state.currency} {this.state.amount}</h3>
		      <h3><span>{strings.site.vehicle.year}: </span>{this.state.year}</h3>
		   	  <h3><span>{strings.site.vehicle.engine}: </span>{this.state.engine}</h3>
		      <h3><span>{strings.site.vehicle.kilometers}: </span>{this.state.kilometers}</h3>
	   	      <h3><span>{strings.site.vehicle.color}: </span>{this.state.color}</h3>
		      <span className="vehicle-description">{ReactHtmlParser(this.state.description)}</span>
		  	  
		  	  	{this.state.ecommerceLink.length > 0
		  	  	 ?  (
		  	  	 	<div>
			  	  	 	<h3>{strings.site.visit}</h3>
		  	  		  	<a className="ml-logo" href={this.state.ecommerceLink} target="_blank">
		  	  		  		<img src="/images/ecommerceIcon.png" alt-text={strings.site.ecommerceLabel}/>
		  	  		  	</a>
		  	  		</div>  	
	  	  		  	)
	  	  		 : (undefined) }	  
		    </div>
		)	
	}
}

const mapStateToProps = (state, props) => ({
  vehicle: state.vehicles.find((vehicle) => vehicle.id === props.match.params.vehicleId)
});

export default connect(mapStateToProps, undefined)(VehicleDetailPage);