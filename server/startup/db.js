const admin = require('firebase-admin');

const serviceAccount = require("../../cars-showcase-test-firebase-adminsdk-ddtvb-335a0b9bd7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cars-showcase-test.firebaseio.com"
});

module.exports = admin;