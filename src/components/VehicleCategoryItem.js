import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { Media } from 'react-bootstrap';

const VehicleCategoryItem = ({ id, title, description, amount, createdAt, note, filesURL }) => (
	<Media>
	  <img
	    width={50 + '%'}
	    className="mr-3"
	    src={filesURL[0]}
	    alt="Generic placeholder"
	  />
	  <Media.Body>
	    <h5>{title}</h5>
	    <p>{note}</p>
	  </Media.Body>
	</Media>
);

export default VehicleCategoryItem;
