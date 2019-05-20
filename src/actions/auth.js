import { firebase } from '../firebase/firebase';

export const login = (uid, userEmail) => ({
  type: 'LOGIN',
  uid,
  userEmail
});

export const startLogin = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Email already associated with another account.');
        // Handle account linking here, if using.
      } else {
        console.error(error);
      }      
    });
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
