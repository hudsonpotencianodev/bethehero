const express = require('express');
const {celebrate} = require('celebrate');
// eslint-disable-next-line new-cap
const routes = express.Router();

const createOngValidation = require('./validations/createOngValidation');
const profileValidation = require('./validations/profileValidation');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate(createOngValidation), OngController.create);

routes.get('/profile', celebrate(profileValidation), ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
