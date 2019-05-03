import React from 'react';
import VehiclesSummary from './VehiclesSummary';
import VehicleCategory from '../components/VehicleCategory'; 
import PublicRoute from '../routers/PublicRoute';

const HomePage = () => (
  <div>
    <VehiclesSummary />
    {/* <PublicRoute path="/livianos" component={VehicleCategory}/> */}
  </div>
);

export default HomePage;
