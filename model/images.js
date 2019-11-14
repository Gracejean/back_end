var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var image = new Schema({
  url: {type: String},
  status:{type:String,},


},
  { collection: 'images' }
);

var Photos = mongoose.model('Photos', image);

module.exports = Photos