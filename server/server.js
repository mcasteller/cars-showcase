require('dotenv').config({ path: '.env.test' })
const path = require('path');
const express = require('express');
const cors = require('cors')
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 8080;

app.use(cors())
app.use(express.static(publicPath));

require('./startup/routes')(app);

// app.all('/secret', function (req, res, next) {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
// })

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
