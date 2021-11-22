'use strict';

const express = require('express');

// const signUp = require('./routes/SIGN UP ROUTE')
// const signIn = require('./routes/SIGN IN ROUTE')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const ROUTE = require('ROUTES')
// const ROUTE = require('ROUTES')
// const ROUTE = require('ROUTES')
// const ROUTE = require('ROUTES')

// app.use(signUp)
// app.use(ROUTE)

module.exports = {
  server: app,
  start: PORT => {
    if (!PORT) {throw new Error('Missing PORT')}
    app.listen(PORT, () => console.log('server up on port: ' + PORT))
  }
};