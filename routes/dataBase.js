'use strict'

var express = require('express');
var consultsController = require('../controllers/consults.js');
var api = express.Router();

api.get('/consultEmp/:id?', consultsController.getEmpresa);


module.exports = api;