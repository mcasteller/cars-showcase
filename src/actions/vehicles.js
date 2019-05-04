import uuid from 'uuid';
import database from '../firebase/firebase';

// Actions allow us to change the redux store

// ADD_VEHICLE
export const addVehicle = (vehicle) => ({
  type: 'ADD_VEHICLE',
  vehicle
});

export const startAddVehicle = (vehicleData = {}) => {
  return (dispatch, getState) => {
    //const uid = getState().auth.uid;
    const {  
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = vehicleData;
    const vehicle = { description, note, amount, createdAt };

    // return database.ref(`users/${uid}/expenses`).push(vehicle).then((ref) => {
    //   dispatch(addExpense({
    //     id: ref.key,
    //     ...vehicle
    //   }));
    // });
    return dispatch(addVehicle({
        id: uuid(), 
        ...vehicle
        }))
    };
};

// REMOVE_VEHICLE
export const removeVehicle = ({ id } = {}) => ({
  type: 'REMOVE_VEHICLE',
  id
});

export const startRemoveVehicle = ({ id } = {}) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    // return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
    //   dispatch(removeExpense({ id }));
    // });
    return dispatch(removeVehicle({ id }));
  };
};

// EDIT_VEHICLE
export const editVehicle = (id, updates) => ({
  type: 'EDIT_VEHICLE',
  id,
  updates
});

export const startEditVehicle = (id, updates) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    // return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
    //   dispatch(editExpense(id, updates));
    // });
    return dispatch(editVehicle(id, updates));
  };
};