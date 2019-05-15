import { database, storage } from '../firebase/firebase';

// Actions allow us to change the redux store

// ADD_VEHICLE
export const addVehicle = (vehicle) => ({
  type: 'ADD_VEHICLE',
  vehicle
});

export const startAddVehicle = (vehicleData = {}) => {
  return (dispatch, getState) => {
    const {
      brand = '',  
      trim = '',  
      amount = 0,  
      year = 0,  
      engine = '',  
      kilometers = '',  
      color = '',  
      description = '',
      shortDescription = '',
      filesURL = []
    } = vehicleData;

    saveFiles(vehicleData.filesURL).then((filesURL) => {
   
      const vehicle = { brand, trim, amount, year, engine, kilometers, color, description, shortDescription, filesURL };

      database.ref(`vehicles`).push(vehicle).then((ref) => {
        dispatch(addVehicle({
          id: ref.key,
          ...vehicle
        }));
      })
    });
  };
};

const saveFiles = async (files) => {
    return await Promise.all(files.map(file => saveFile(file)))
}

const saveFile = async (file) => {
  return await storeFile(file)
}

const storeFile = (file) => {
  let ref = storage.ref().child(`images/${file.name}`);
  return ref.put(file.src).then((snapshot) => {
            console.log('Uploaded a blob or file!');

            return snapshot.downloadURL;
        });
}

// REMOVE_VEHICLE
export const removeVehicle = ({ id } = {}) => ({
  type: 'REMOVE_VEHICLE',
  id
});

export const startRemoveVehicle = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`vehicles/${id}`).remove().then(() => {
      dispatch(removeVehicle({ id }));
    });
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
    const uid = getState().auth.uid;


    saveFiles(updates.filesURL).then((filesURL) => {
   
      const vehicleUpdates = { ...updates, filesURL };

      database.ref(`vehicles/${id}`).update(vehicleUpdates).then(() => {
        dispatch(editVehicle(id, vehicleUpdates));
      });
    });
  }
};

// SET_VEHICLES
export const setVehicles = (vehicles) => ({
  type: 'SET_VEHICLES',
  vehicles
});

export const startSetVehicles = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`vehicles`).once('value').then((snapshot) => {
      const vehicles = [];

      snapshot.forEach((childSnapshot) => {
        vehicles.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setVehicles(vehicles));
    });
  };
};
