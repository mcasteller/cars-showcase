const express = require('express');
//const users = require('../routes/users');
const meli = require('../routes/meli');

module.exports = function(app) {
 // app.use(express.json());
//  app.use('/api/users', users);
  app.use('/api/meli', meli);
}