const meliEmitter = require('../events/meliEmitter');
const userEmitter = require('../events/userEmitter');
const user = require('../models/user');

module.exports = function() {
  meliEmitter.on('user-auth-available', user.saveMeliTokens);
  userEmitter.on('get-user-data', user.getUserData);
}