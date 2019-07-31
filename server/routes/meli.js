const express = require('express');
const path = require('path');
const router = express.Router();
const meliEmitter = require('../events/meliEmitter');
const meli = require('mercadolibre');

// Initialize
const meliObject = new meli.Meli(process.env.App_Id, process.env.Secret_Key),
      redirect_uri = process.env.REDIRECT_URI;  //"https://ce341e9b.ngrok.io/api/meli/getUserAuth";

// Deliver auth URL to front end user (could be any user that wish to work with the app)
router.get('/getAuthURL', (req, res) => {
    res.send(meliObject.getAuthURL(redirect_uri));
});

/* In here we need to handle two possible situations:
** Authorization Code sent by API: we can use it to request user access/refresh tokens
** Receive user access/refresh tokens after auth code exchange with ML API*/

router.get('/getUserAuth', (req, res) => {
    const code = req.query.code;
    if (code) {
        const callback = (err, res) => {
            if (err) {
                console.log('err', err);
            } else {
                // fire event holding user token information
                meliEmitter.emit('user-auth-available', res)
            }
        }
        meliObject.authorize(code, redirect_uri, callback); 
    }

    res.sendFile(path.join(publicPath, 'index.html'));
});

module.exports = router; 
module.exports.meliObject = meliObject;