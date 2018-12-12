'use strict'
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var uploadSchema = new schema({
    
    sceneImage: String,
    objImage: String,
    // objFilename: String,
    // sceneFilename: string

   
});

module.exports = mongoose.model('upload', uploadSchema);
