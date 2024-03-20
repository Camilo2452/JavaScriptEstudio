'use strict'
 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProjectSchema = Schema({
    name: String,
    description:String,
    year: Number,
    category:String,
    langs:String,
    image:String
}); 

module.exports = mongoose.model('Project',ProjectSchema);
//Projects-> guarda los documents en una coleccion