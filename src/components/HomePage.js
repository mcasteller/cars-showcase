import React from 'react';
import VehiclesSummary from './VehiclesSummary';
import VehicleListFilters from '../components/VehicleListFilters';
import VehicleList from '../components/VehicleList'; 
import strings from '../resources/strings';

const HomePage = () => (
  <div>
  	<div className="hero">
  		<img className="hero__image"src="images/home_banner.jpg"/>
  		<div className="hero__copy__wrapper">
	  		<h1 className="hero__title">{strings.site.name}</h1>
	  		<h2 className="hero__sub_title">{strings.site.description}</h2>	
  		</div>
  	</div>	
  	<div className="content-container">
  		<h3 className="description">{strings.site.longDescription}</h3>
  	</div>
    <VehiclesSummary />
    <VehicleListFilters />
    <VehicleList />
  </div>
);

export default HomePage;
