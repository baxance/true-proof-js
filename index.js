'use strict';

require('dotenv').config();

// const { db } = require('./src/models')
const server = require('./src/server');

const PORT = process.env.PORT;

// db.sync()
// .then(() => {
  server.start(PORT);
// })
