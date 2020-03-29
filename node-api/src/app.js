const express = require('express');
const {errors} = require('celebrate');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors({
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  exposedHeaders: ['Access-Control-Allow-Origin', 'X-Total-Count'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
