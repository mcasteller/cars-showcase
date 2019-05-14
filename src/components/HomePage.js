import React from 'react';
import VehiclesSummary from './VehiclesSummary';
import VehicleListFilters from '../components/VehicleListFilters';
import VehicleList from '../components/VehicleList'; 

const HomePage = () => (
  <div>
  	<div className="hero">
  		<img className="hero__image"src="images/home_banner.jpg"/>
  		<div className="hero__copy__wrapper">
	  		<h2 className="hero__title">New Trend Autos</h2>
	  		<h3 className="hero__sub_title">Compra y venta de autos usados</h3>	
  		</div>
  	</div>	
  	<div className="content-container">
  		<h4>Ofrecemos un servicio de asesoramiento en la compra y venta de autos, en este sitio podra encontrar
  		aquellos vehiculos disponibles para la venta. Si usted esta interesado en vender un vehiculo tambien podemos 
  		asesorarlo y acompañarlo a lo largo del proceso de venta</h4>
  	</div>
    <VehiclesSummary />
    <VehicleListFilters />
    <VehicleList />
  </div>
);

export default HomePage;
