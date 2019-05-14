import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { Media } from 'react-bootstrap';

const VehicleListItem = (
	{ 
		id, 
		brand,
		trim, 
		amount, 
		year,
		engine,
		kilometers,
		color, 
		description,
		shortDescription, 
		filesURL 
	}
) => (
	<Media>
	  <img
	    width={50 + '%'}
	    className="mr-3"
	    src={filesURL[0]}
	    alt="Generic placeholder"
	  />
	  <Media.Body>
	    <h2><span>Marca: </span>{brand}</h2>
   	    <h2><span>Modelo: </span>{trim}</h2>
	    <h2><span>Año: </span>{year}</h2>
	   	<h2><span>Motor: </span>{engine}</h2>
	    <h2><span>Kilometros: </span>{kilometers}</h2>
   	    <h2><span>Color: </span>{color}</h2>
	    <h4>{shortDescription}</h4>
	  </Media.Body>
	</Media>
);

export default VehicleListItem;
