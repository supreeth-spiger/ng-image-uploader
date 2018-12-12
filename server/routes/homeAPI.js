'use strict'
var homeCtrl = require('../controllers/homeCtrl');
var express = require('express');
var router = express.Router();

router.post('/', homeCtrl.fileUpload);

module.exports = router;
