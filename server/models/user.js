const firebase = require('../startup/db');
const userEmitter = require('../events/userEmitter');
const { meliObject } = require('../routes/meli');
const storedItems = ['access_token','refresh_token','expires_in','user_id']

const database = firebase.database();
const storage = firebase.storage();

async function saveMeliTokens (userData) {

  await Promise.all(storedItems.map(async (item) => {
      // Store tokens in DB.
      database.ref(`tokenData/${item}`).set(userData[item]);
  }));

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
  meliObject.get(`sites/MLA/search?category=MLM1743&&seller_id=${userData.user_id}?access_token=${userData.access_token}`, function (err, res) {
    console.log("User Data" , res);
    return res.data;
  });
};

module.exports = { saveMeliTokens, getMeliTokens, saveUserData, getUserData }
