import { database, storage } from '../firebase/firebase';

// Actions allow us to change the redux store

// ADD_VEHICLE
export const addVehicle = (vehicle) => ({
  type: 'ADD_VEHICLE',
  vehicle
});

export const startAddVehicle = (vehicleData = {}) => {
  return async (dispatch, getState) => {
    const {
      brand = '',  
      trim = '',  
      currency = '',
      amount = 0, 
      ecommerceLink = '', 
      year = 0,  
      engine = '',  
      kilometers = '',  
      color = '',  
      description = '',
      shortDescription = '',
      files = ''
    } = vehicleData;

    const vehicle = { 
      brand, 
      trim, 
      currency, 
      amount, 
      year, 
      engine, 
      kilometers, 
      color, 
      description, 
      shortDescription, 
      ecommerceLink,
      files 
    };
    
    /* First we save the vehicle files
    ** Then we store the files using vehicleId from database 
    ** Finally we store uploaded files url into vehicle data 
    ** Note: this requires storing twice some vehice info*/
    const vehicleRef = await saveVehicle(vehicle);
    const vehiclePath = vehicleRef.path.toString();
    const updatedFiles = await saveFiles(vehiclePath, files);
    return await updateVehicle(vehiclePath, updatedFiles)
      .then(() => {
        dispatch(addVehicle({
          id: vehicleRef.key,
          ...vehicle,
          files: updatedFiles
        }));
      })
      .catch((e) => {
        console.log('Error', e);
      });
  };
};

const saveVehicle = (vehicle, vehiclePath) => {
  if (vehiclePath) {
    return database.ref(`${vehiclePath}`).update(vehicle) 
  }
  return database.ref(`vehicles`).push(vehicle);
}

const saveFiles = async (vehiclePath, files, removeExistingFiles, getState) => {
  if (removeExistingFiles) {
    await removeFiles(vehiclePath, getState);
  }
  return files.length > 0 ?
         await Promise.all(files.map(file => saveFile(vehiclePath, file))) :
         '' ;
}

const updateVehicle = async (vehiclePath, updatedFiles) => {
  await database.ref(`${vehiclePath}/files`).set(updatedFiles)
  return await database.ref(`${vehiclePath}/files`).once('value');
}

const removeFiles = async (vehiclePath, getState) => {
    const vehicles = getState().vehicles.filter((vehicle) => {
      return vehiclePath.includes(vehicle.id); 
    });

    //return await Promise.all(files.map(file => storage.ref().child(`${file.path}`).delete()));
    for (const file of vehicles[0].files) {
      await storage.ref().child(`${file.path}`).delete().catch((error) => {
        console.log(`File not found: ${error}`);
      });
    }
}

const saveFile = async (vehiclePath, file) => {
  // Only want to save new images, that happens when file.src value is present
  if (file.src) {
    let fileRef = await storage.ref().child(`${vehiclePath}/images/${file.name}`);
    return await fileRef.put(file.src).then((snapshot) => {
              console.log('Uploaded a blob or file!');

              return { 
                       ...file,
                       "url": snapshot.downloadURL,
                       "path": snapshot.ref.fullPath
                     };
          });    
  } else {
    // If file was not updated, we just return same file value
    return file;
  }

}

// REMOVE_VEHICLE
export const removeVehicle = ({ id } = {}) => ({
  type: 'REMOVE_VEHICLE',
  id
});

export const startRemoveVehicle = ({ id } = {}) => {
  return async (dispatch, getState) => {
    
    return database.ref(`vehicles/${id}`).remove().then(() => {
      removeFiles(id, getState)
      dispatch(removeVehicle({ id }));
    });
  };
};

// EDIT_VEHICLE
export const editVehicle = (updates) => ({
  type: 'EDIT_VEHICLE',
  ...updates
});

export const startEditVehicle = (id, updates, resetFiles) => {
  return (dispatch, getState) => {
    return saveData(id, updates, getState, resetFiles).then((ref) => {
        dispatch(editVehicle({
          id,
          ...updates,
          files: ref.val()
        }));
    });
  }
}

const saveData = async (id, updates, getState, resetFiles) => {
  // /* First we save the vehicle files
    // ** Then we store the files using vehicleId from database 
    // ** Finally we store uploaded files url into vehicle data 
    // ** Note: this requires storing twice some vehice info*/
    const vehiclePath = `vehicles/${id}`;
    await saveVehicle(updates, vehiclePath);
    const updatedFiles = await saveFiles(vehiclePath, updates.files, resetFiles, getState);
    return await updateVehicle(vehiclePath, updatedFiles);
}

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
