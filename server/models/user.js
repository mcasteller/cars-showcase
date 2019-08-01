const firebase = require('../startup/db');
const axios = require('axios');
const userEmitter = require('../events/userEmitter');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const encryptedItems = ['access_token','refresh_token']

const database = firebase.database();
const storage = firebase.storage();

async function saveMeliTokens (userData) {
  console.log('saveMeliTokens userData', userData);

  await Promise.all(encryptedItems.map(async (item) => {
      // Store tokens in DB.
      database.ref(`tokenData/${item}`).set(userData[item]);
  }));

  // Store not ecrypted items
  await database.ref('tokenData/expires_in').set(userData.expires_in);
  await database.ref('tokenData/user_id').set(userData.user_id);

  userEmitter.emit('get-user-data');
};

async function getMeliTokens(user) {
  const ref = database.ref('tokenData');
  const snapshot = await ref.once("value");
  return snapshot.val(); 
};

// Save user data into DB
function saveUserData(user, data) {
};

async function getUserData(user, dataType) {
  // Request user ref
  const userData = await getMeliTokens(null);
  console.log("getUserData*************", userData);
  // Retrieve user data
  axios.get(`https://api.mercadolibre.com/users/${userData.user_id}?access_token=${userData.access_token}`)
    .then(response => {
      console.log("User Data" , response.data);

      return response.data;
      // Save user info into database
      //saveUserData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = { saveMeliTokens, getMeliTokens, saveUserData, getUserData }
