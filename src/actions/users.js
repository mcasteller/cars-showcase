import { firebase, database, storage } from '../firebase/firebase';

// Actions allow us to change the redux store

export const updateMeliSyncStatus = (user) => ({
  type: 'UPDATE_MELI_SYNC',
  user
});

export const startMeliSynchronize = (authURL) => {
  return async (dispatch, getState) => {
    
    const user = firebase.auth().currentUser;

    const appUser = { 
      id: user.uid,
      meli: { enableMeliSync: true } 
    }

    await database.ref(`users/${user.uid}`).set(appUser).then( () => {
        dispatch(updateMeliSyncStatus(appUser))
      });

    window.open(authURL, "Google", "width=500,height=500");

  }
}

export const removeMeliSynchronize = () => {
  return async (dispatch, getState) => {
      
    const user = firebase.auth().currentUser;

    const appUser = { 
      id: user.uid,
      meli: { enableMeliSync: false } 
    }

    await database.ref(`users/${user.uid}/meli/enableMeliSync`).set(false)
    .then(() => {
      dispatch(updateMeliSyncStatus(appUser))
    });
  }
}

// SET_VEHICLES
export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});

export const startSetUsers = () => {
  return (dispatch, getState) => {

    return database.ref(`users`).once('value').then((snapshot) => {
      
      const users = [];

      snapshot.forEach((childSnapshot) => {
        users.push({
          ...childSnapshot.val()
        });
      });

      dispatch(setUsers(users));
    });
  };
};
