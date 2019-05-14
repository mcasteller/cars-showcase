import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import PublicRoute from '../routers/PublicRoute';

//import selectExpenses from '../selectors/expenses';
//import selectVehiclesTotal from '../selectors/vehicles-total';

export const VehiclesSummary = () => {
  const categories = [
    {
      name: 'Livianos',
      id: 'livianos',
      description: 'Autos Livianos',
      img: ''
    },
    {
      name: 'Medianos',
      id: 'medianos',
      description: 'Autos Medianos',
      img: ''
    },
    {
      name: 'Pesados',
      id: 'pesados',
      description: 'Autos Pesados',
      img: ''
    }
  ];
  //const vehicleWord = vehicleCount === 1 ? 'expense' : 'expenses';
 // const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div className="content-container">
    {//   <div className="content-container">
    //     {/* <h1 className="page-header__title">Viewing <span>{vehicleCount}</span> {vehicleWord} totalling <span>{formattedExpensesTotal}</span></h1> */}
        
        <h2 className="page-header">Vehiculos en Venta</h2>
        // <div>
    //       {
    //         categories.map(({ name, id }) => {
    //           return (
    //             <div key={id}>
    //               <Link to={`/${id}`}>
    //                 <h2>{name}</h2>
    //               </Link>
    //             </div>
    //           )
    //         })
    //       }
    //     </div>
    //   </div>
  }
    </div>
  );
};

export default VehiclesSummary