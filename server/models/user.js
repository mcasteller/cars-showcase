const firebase = require('../startup/db');
const bcrypt = require('bcryptjs');
const axios = require('axios');
const userEmitter = require('../events/userEmitter');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const encryptedItems = ['access_token','refresh_token']

const database = firebase.database();
const storage = firebase.storage();

async function saveMeliTokens (user, data) {
  
  await Promise.all(encryptedItems.map(async (item) =>{
    // Store tokens in firebase
    await bcrypt.hash(data[item], saltRounds)
      .then((hash) => {
        // Store hash in your password DB.
        database.ref(`tokenData/${item}`).set(hash);
      })
      .catch ((err) => {
        console.log('err', err);
      }) 
  }))

  // Store expire time.
  await database.ref('tokenData/expires_in').set(data.expires_in);

  userEmitter.emit('get-user-data');
};

async function getMeliTokens(user) {
  const ref = database.ref('tokenData');
  const snapshot = await ref.once("value");
  return snapshot.val(); 
};

function saveUserData(user, data) {};

function getUserData(user, dataType) {
  // Request user ref
  const tokens = getMeliTokens(null);
  // Retrieve user data
  axios.get(`https://api.mercadolibre.com/users/202593498?access_token=${tokens.access_token}`)
    .then(response => {
      console.log(response.data.url);
      console.log(response.data.explanation);
      // Save user info into database
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = { saveMeliTokens, getMeliTokens, saveUserData, getUserData }
